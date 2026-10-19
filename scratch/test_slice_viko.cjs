const path = require('path');
const fs = require('fs');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  const b64 = fs.readFileSync('scratch/temp_concept.png').toString('base64');
  
  const result = await page.evaluate(async (srcB64) => {
    const img = new Image();
    img.src = 'data:image/png;base64,' + srcB64;
    await new Promise(r => img.onload = r);
    
    // Viko is roughly x: 80..620, y: 80..1020
    const cropX = 80, cropY = 80, cropW = 540, cropH = 940;
    
    const canvas = document.createElement('canvas');
    canvas.width = cropW;
    canvas.height = cropH;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
    
    const imgData = ctx.getImageData(0, 0, cropW, cropH);
    const data = imgData.data;
    
    // Background removal logic:
    // 1. Identify pure white / off-white background from outer boundary
    // In temp_concept.png, background is R>245, G>245, B>245.
    // Soft floor shadow has minC around 210-240, neutral grey/blue.
    // We want to flood fill all connected white/grey background from outer edge!
    // BUT Viko's white polo shirt is inside his body:
    // - Above: cyan head (R < 150, B > 200)
    // - Collar: dark navy (R < 50, G < 80, B < 150)
    // - Bottom: dark navy shorts (R < 50, G < 80, B < 150)
    // - Sides: cyan hands and blue cuffs!
    // The flood fill CANNOT penetrate into his shirt IF it stops at dark/colored pixels!
    
    const visited = new Uint8Array(cropW * cropH);
    const queue = [];
    
    function isBg(p) {
      const a = data[p+3];
      if (a < 10) return true;
      const r = data[p], g = data[p+1], b = data[p+2];
      
      // Color distance from pure white (255, 255, 255)
      const diffR = 255 - r;
      const diffG = 255 - g;
      const diffB = 255 - b;
      
      // Pure or near pure white
      if (r > 240 && g > 240 && b > 240) return true;
      
      // Soft floor shadow: grey with low saturation, high brightness
      const maxC = Math.max(r, g, b);
      const minC = Math.min(r, g, b);
      const sat = maxC - minC;
      
      // Floor shadow under shoes: minC > 180 and low saturation (sat < 30)
      if (minC > 180 && sat < 25) return true;
      
      return false;
    }
    
    function add(x, y) {
      if (x < 0 || x >= cropW || y < 0 || y >= cropH) return;
      const idx = y * cropW + x;
      if (visited[idx]) return;
      const p = idx * 4;
      if (isBg(p)) {
        visited[idx] = 1;
        queue.push(idx);
      }
    }
    
    // Start flood from outer borders
    for (let x = 0; x < cropW; x++) { add(x, 0); add(x, cropH - 1); }
    for (let y = 0; y < cropH; y++) { add(0, y); add(cropW - 1, y); }
    
    let head = 0;
    while (head < queue.length) {
      const curr = queue[head++];
      const x = curr % cropW;
      const y = Math.floor(curr % cropW);
      const p = curr * 4;
      
      // Make transparent
      data[p+3] = 0;
      
      const cx = curr % cropW;
      const cy = Math.floor(curr / cropW);
      add(cx + 1, cy);
      add(cx - 1, cy);
      add(cx, cy + 1);
      add(cx, cy - 1);
    }
    
    // Defringe: if an edge pixel is adjacent to transparent pixel and has r>220, g>220, b>220, fade its alpha
    for (let y = 1; y < cropH - 1; y++) {
      for (let x = 1; x < cropW - 1; x++) {
        const idx = y * cropW + x;
        const p = idx * 4;
        if (data[p+3] > 0) {
          // Check if neighbor is transparent
          const hasTransNeighbor = 
            data[(p - 4) + 3] === 0 || 
            data[(p + 4) + 3] === 0 || 
            data[(p - cropW*4) + 3] === 0 || 
            data[(p + cropW*4) + 3] === 0;
          
          if (hasTransNeighbor) {
            const r = data[p], g = data[p+1], b = data[p+2];
            // If it's a white fringe pixel, make transparent or soften
            if (r > 210 && g > 210 && b > 210) {
              data[p+3] = 0;
            }
          }
        }
      }
    }
    
    ctx.putImageData(imgData, 0, 0);
    
    // Tight crop
    let minX = cropW, maxX = 0, minY = cropH, maxY = 0;
    for (let y = 0; y < cropH; y++) {
      for (let x = 0; x < cropW; x++) {
        const p = (y * cropW + x) * 4;
        if (data[p+3] > 10) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    
    const pad = 6;
    minX = Math.max(0, minX - pad);
    minY = Math.max(0, minY - pad);
    maxX = Math.min(cropW - 1, maxX + pad);
    maxY = Math.min(cropH - 1, maxY + pad);
    const tw = maxX - minX + 1;
    const th = maxY - minY + 1;
    
    const tight = document.createElement('canvas');
    tight.width = tw;
    tight.height = th;
    const tctx = tight.getContext('2d');
    tctx.drawImage(canvas, minX, minY, tw, th, 0, 0, tw, th);
    
    return tight.toDataURL('image/png').replace(/^data:image\/png;base64,/, '');
  }, b64);
  
  fs.writeFileSync('scratch/test_viko_clean.png', Buffer.from(result, 'base64'));
  console.log('Saved scratch/test_viko_clean.png');
  await browser.close();
})();
