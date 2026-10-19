const path = require('path');
const fs = require('fs');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const conceptB64 = fs.readFileSync('scratch/temp_concept.png').toString('base64');

  // 1. STREAK FIRE from concept: x: 670, y: 80, w: 370, h: 480
  const fireCut = await page.evaluate(async (b) => {
    const img = new Image();
    img.src = 'data:image/png;base64,' + b;
    await new Promise(r => img.onload = r);
    const c = document.createElement('canvas');
    c.width = 370; c.height = 480;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 670, 80, 370, 480, 0, 0, 370, 480);
    const imgData = ctx.getImageData(0, 0, 370, 480);
    const d = imgData.data;

    // Flood fill
    const visited = new Uint8Array(370 * 480);
    const q = [];
    function isBg(p) {
      if (d[p+3] < 10) return true;
      const r = d[p], g = d[p+1], b = d[p+2];
      if (r > 230 && g > 230 && b > 230) return true;
      const maxC = Math.max(r, g, b), minC = Math.min(r, g, b);
      if (minC > 190 && (maxC - minC) < 25) return true;
      return false;
    }
    function push(x, y) {
      if (x < 0 || x >= 370 || y < 0 || y >= 480) return;
      const idx = y * 370 + x;
      if (visited[idx]) return;
      if (isBg(idx * 4)) { visited[idx] = 1; q.push(idx); }
    }
    for (let x = 0; x < 370; x++) { push(x, 0); push(x, 479); }
    for (let y = 0; y < 480; y++) { push(0, y); push(369, y); }
    let head = 0;
    while (head < q.length) {
      const curr = q[head++];
      const cx = curr % 370, cy = Math.floor(curr / 370);
      d[curr*4 + 3] = 0;
      push(cx+1, cy); push(cx-1, cy); push(cx, cy+1); push(cx, cy-1);
    }

    // Erase bottom floor shadow below the flame
    for (let y = 430; y < 480; y++) {
      for (let x = 0; x < 370; x++) {
        d[(y*370 + x)*4 + 3] = 0;
      }
    }

    // Defringe
    for (let y = 1; y < 479; y++) {
      for (let x = 1; x < 369; x++) {
        const idx = y * 370 + x;
        const p = idx * 4;
        if (d[p+3] > 0) {
          const hasT = d[p-4+3] === 0 || d[p+4+3] === 0 || d[p-370*4+3] === 0 || d[p+370*4+3] === 0;
          if (hasT && d[p] > 220 && d[p+1] > 220 && d[p+2] > 220) d[p+3] = 0;
        }
      }
    }
    ctx.putImageData(imgData, 0, 0);

    // Tight crop
    let minX = 370, maxX = 0, minY = 480, maxY = 0;
    for (let y = 0; y < 480; y++) {
      for (let x = 0; x < 370; x++) {
        if (d[(y*370+x)*4 + 3] > 20) {
          if (x < minX) minX = x; if (x > maxX) maxX = x;
          if (y < minY) minY = y; if (y > maxY) maxY = y;
        }
      }
    }
    const tw = maxX - minX + 1, th = maxY - minY + 1;
    const tight = document.createElement('canvas');
    tight.width = tw; tight.height = th;
    tight.getContext('2d').drawImage(c, minX, minY, tw, th, 0, 0, tw, th);
    return tight.toDataURL('image/png').replace(/^data:image\/png;base64,/, '');
  }, conceptB64);
  fs.writeFileSync('public/assets/streak_fire_3d.png', Buffer.from(fireCut, 'base64'));
  console.log('Fixed streak_fire_3d.png');

  // 2. PURPLE HEART from concept: x: 1370, y: 150, w: 260, h: 260
  const heartCut = await page.evaluate(async (b) => {
    const img = new Image();
    img.src = 'data:image/png;base64,' + b;
    await new Promise(r => img.onload = r);
    const c = document.createElement('canvas');
    c.width = 260; c.height = 260;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 1370, 150, 260, 260, 0, 0, 260, 260);
    const imgData = ctx.getImageData(0, 0, 260, 260);
    const d = imgData.data;

    // Flood fill
    const visited = new Uint8Array(260 * 260);
    const q = [];
    function isBg(p) {
      if (d[p+3] < 10) return true;
      const r = d[p], g = d[p+1], b = d[p+2];
      if (r > 230 && g > 230 && b > 230) return true;
      const maxC = Math.max(r, g, b), minC = Math.min(r, g, b);
      if (minC > 195 && (maxC - minC) < 25) return true;
      return false;
    }
    function push(x, y) {
      if (x < 0 || x >= 260 || y < 0 || y >= 260) return;
      const idx = y * 260 + x;
      if (visited[idx]) return;
      if (isBg(idx * 4)) { visited[idx] = 1; q.push(idx); }
    }
    for (let x = 0; x < 260; x++) { push(x, 0); push(x, 259); }
    for (let y = 0; y < 260; y++) { push(0, y); push(259, y); }
    let head = 0;
    while (head < q.length) {
      const curr = q[head++];
      const cx = curr % 260, cy = Math.floor(curr / 260);
      d[curr*4 + 3] = 0;
      push(cx+1, cy); push(cx-1, cy); push(cx, cy+1); push(cx, cy-1);
    }

    // Erase bottom shadow below tip (y > 210)
    for (let y = 210; y < 260; y++) {
      for (let x = 0; x < 260; x++) {
        d[(y*260 + x)*4 + 3] = 0;
      }
    }

    // Defringe
    for (let y = 1; y < 259; y++) {
      for (let x = 1; x < 259; x++) {
        const idx = y * 260 + x;
        const p = idx * 4;
        if (d[p+3] > 0) {
          const hasT = d[p-4+3] === 0 || d[p+4+3] === 0 || d[p-260*4+3] === 0 || d[p+260*4+3] === 0;
          if (hasT && d[p] > 220 && d[p+1] > 220 && d[p+2] > 220) d[p+3] = 0;
        }
      }
    }
    ctx.putImageData(imgData, 0, 0);

    let minX = 260, maxX = 0, minY = 260, maxY = 0;
    for (let y = 0; y < 260; y++) {
      for (let x = 0; x < 260; x++) {
        if (d[(y*260+x)*4 + 3] > 20) {
          if (x < minX) minX = x; if (x > maxX) maxX = x;
          if (y < minY) minY = y; if (y > maxY) maxY = y;
        }
      }
    }
    const tw = maxX - minX + 1, th = maxY - minY + 1;
    const tight = document.createElement('canvas');
    tight.width = tw; tight.height = th;
    tight.getContext('2d').drawImage(c, minX, minY, tw, th, 0, 0, tw, th);
    return tight.toDataURL('image/png').replace(/^data:image\/png;base64,/, '');
  }, conceptB64);
  fs.writeFileSync('public/assets/heart_purple_3d.png', Buffer.from(heartCut, 'base64'));
  console.log('Fixed heart_purple_3d.png');

  // 3. VIKO MASCOT 3D: Clean the remaining bottom disc below his boots
  const vikoCleaned = await page.evaluate(async (b64) => {
    const img = new Image();
    img.src = 'data:image/png;base64,' + b64;
    await new Promise(r => img.onload = r);
    const c = document.createElement('canvas');
    c.width = img.width; c.height = img.height;
    const ctx = c.getContext('2d');
    ctx.drawImage(img, 0, 0);
    const imgData = ctx.getImageData(0, 0, img.width, img.height);
    const d = imgData.data;

    // Erase the white/cyan floor puddle below the boots (bottom 7% of height)
    const cutY = Math.floor(img.height * 0.93);
    for (let y = cutY; y < img.height; y++) {
      for (let x = 0; x < img.width; x++) {
        const p = (y * img.width + x) * 4;
        const r = d[p], g = d[p+1], b = d[p+2];
        // If it's light blue or white puddle (r > 100 && g > 150)
        if (g > 150 && b > 180) {
          d[p+3] = 0;
        }
      }
    }
    ctx.putImageData(imgData, 0, 0);

    // Tight crop
    let minX = img.width, maxX = 0, minY = img.height, maxY = 0;
    for (let y = 0; y < img.height; y++) {
      for (let x = 0; x < img.width; x++) {
        if (d[(y*img.width+x)*4 + 3] > 20) {
          if (x < minX) minX = x; if (x > maxX) maxX = x;
          if (y < minY) minY = y; if (y > maxY) maxY = y;
        }
      }
    }
    const tw = maxX - minX + 1, th = maxY - minY + 1;
    const tight = document.createElement('canvas');
    tight.width = tw; tight.height = th;
    tight.getContext('2d').drawImage(c, minX, minY, tw, th, 0, 0, tw, th);
    return tight.toDataURL('image/png').replace(/^data:image\/png;base64,/, '');
  }, fs.readFileSync('public/assets/viko_mascot_3d.png').toString('base64'));
  fs.writeFileSync('public/assets/viko_mascot_3d.png', Buffer.from(vikoCleaned, 'base64'));
  console.log('Fixed viko_mascot_3d.png');

  // 4. MASCOT JUMP & SAD: Erase bottom text labels
  for (const fn of ['mascot_jump_cheer.png', 'mascot_sad_cry.png']) {
    const b64 = fs.readFileSync('public/assets/' + fn).toString('base64');
    const labelCleaned = await page.evaluate(async (src) => {
      const img = new Image();
      img.src = 'data:image/png;base64,' + src;
      await new Promise(r => img.onload = r);
      const c = document.createElement('canvas');
      c.width = img.width; c.height = img.height;
      const ctx = c.getContext('2d');
      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, img.width, img.height);
      const d = imgData.data;

      // Erase bottom 30px (contains text labels)
      for (let y = img.height - 30; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
          d[(y * img.width + x) * 4 + 3] = 0;
        }
      }
      ctx.putImageData(imgData, 0, 0);

      let minX = img.width, maxX = 0, minY = img.height, maxY = 0;
      for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
          if (d[(y*img.width+x)*4 + 3] > 20) {
            if (x < minX) minX = x; if (x > maxX) maxX = x;
            if (y < minY) minY = y; if (y > maxY) maxY = y;
          }
        }
      }
      const tw = maxX - minX + 1, th = maxY - minY + 1;
      const tight = document.createElement('canvas');
      tight.width = tw; tight.height = th;
      tight.getContext('2d').drawImage(c, minX, minY, tw, th, 0, 0, tw, th);
      return tight.toDataURL('image/png').replace(/^data:image\/png;base64,/, '');
    }, b64);
    fs.writeFileSync('public/assets/' + fn, Buffer.from(labelCleaned, 'base64'));
    console.log('Fixed label in', fn);
  }

  await browser.close();
})();
