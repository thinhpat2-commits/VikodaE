const path = require('path');
const fs = require('fs');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Script to generate a visual grid on temp_concept.png and temp_dl.png with 100px lines
  // so we can see exact pixel coordinates of every item!
  for (const filename of ['temp_concept.png', 'temp_dl.png']) {
    const b64 = fs.readFileSync('scratch/' + filename).toString('base64');
    const markedB64 = await page.evaluate(async (b) => {
      const img = new Image();
      img.src = 'data:image/png;base64,' + b;
      await new Promise(r => img.onload = r);
      
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);
      
      // Draw grid
      ctx.strokeStyle = 'rgba(255, 0, 0, 0.3)';
      ctx.fillStyle = 'rgba(255, 0, 0, 0.7)';
      ctx.font = '12px sans-serif';
      
      const step = img.width > 2000 ? 200 : 100;
      for (let x = 0; x < img.width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, img.height);
        ctx.stroke();
        ctx.fillText(x.toString(), x + 2, 20);
      }
      for (let y = 0; y < img.height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(img.width, y);
        ctx.stroke();
        ctx.fillText(y.toString(), 2, y + 14);
      }
      return canvas.toDataURL('image/png').replace(/^data:image\/png;base64,/, '');
    }, b64);
    
    fs.writeFileSync('scratch/grid_' + filename, Buffer.from(markedB64, 'base64'));
    console.log('Saved grid for', filename);
  }
  
  await browser.close();
})();
