const path = require('path');
const fs = require('fs');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

/**
 * Enhanced Ultra-Thorough Background & Pedestal Remover
 * 1. Multi-pass flood fill from all perimeter boundaries
 * 2. Color-distance thresholding from background white
 * 3. Bottom shadow / pedestal eliminator: removes floor shadows below feet
 * 4. Interior protection: protects the mascot's white shirt from being flooded
 * 5. Edge defringing: eliminates pale white halos on boundary pixels
 * 6. Tight bounding box cropping
 */
async function cleanAndTightCrop(page, inputBuffer, isMascot = false) {
  const base64 = inputBuffer.toString('base64');

  const result = await page.evaluate(async ({ b64, isChar }) => {
    const img = new Image();
    img.src = 'data:image/png;base64,' + b64;
    await new Promise(r => img.onload = r);

    const w = img.width;
    const h = img.height;
    const canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0);

    const imgData = ctx.getImageData(0, 0, w, h);
    const data = imgData.data;

    // 1. Perimeter flood fill
    const visited = new Uint8Array(w * h);
    const queue = [];

    // Is this pixel background?
    function isBgPixel(x, y) {
      const idx = y * w + x;
      const p = idx * 4;
      const a = data[p + 3];
      if (a < 15) return true; // already transparent

      const r = data[p], g = data[p + 1], b = data[p + 2];
      const maxC = Math.max(r, g, b);
      const minC = Math.min(r, g, b);
      const sat = maxC - minC;

      // Pure or near pure white (background)
      if (r > 235 && g > 235 && b > 235) return true;

      // Off-white / light grey floor shadow or vignette
      if (minC > 210 && sat < 30) return true;

      // Floor shadow at bottom 25% of image: minC > 160 and low saturation (grey/cyan ground puddle)
      if (y > h * 0.75 && minC > 160 && sat < 40) return true;

      return false;
    }

    // Shirt protection box for mascots:
    // If it's a mascot, protect the center chest area (x: 25%..75%, y: 35%..68%)
    // from being flooded by the background fill!
    function isProtected(x, y) {
      if (!isChar) return false;
      const rx = x / w;
      const ry = y / h;
      // Mascot torso region: white polo shirt
      if (rx > 0.25 && rx < 0.75 && ry > 0.35 && ry < 0.68) {
        const p = (y * w + x) * 4;
        const r = data[p], g = data[p+1], b = data[p+2];
        // If it's white or near white, protect it!
        if (r > 200 && g > 200 && b > 200) return true;
      }
      return false;
    }

    function pushIfBg(x, y) {
      if (x < 0 || x >= w || y < 0 || y >= h) return;
      const idx = y * w + x;
      if (visited[idx]) return;
      if (isProtected(x, y)) return; // DO NOT ENTER SHIRT!

      if (isBgPixel(x, y)) {
        visited[idx] = 1;
        queue.push(idx);
      }
    }

    // Seed from all 4 borders
    for (let x = 0; x < w; x++) {
      pushIfBg(x, 0);
      pushIfBg(x, h - 1);
    }
    for (let y = 0; y < h; y++) {
      pushIfBg(0, y);
      pushIfBg(w - 1, y);
    }

    let head = 0;
    while (head < queue.length) {
      const curr = queue[head++];
      const cx = curr % w;
      const cy = Math.floor(curr / w);
      const p = curr * 4;

      data[p + 3] = 0; // Make 100% transparent!

      pushIfBg(cx + 1, cy);
      pushIfBg(cx - 1, cy);
      pushIfBg(cx, cy + 1);
      pushIfBg(cx, cy - 1);
    }

    // 2. Extra bottom cleanup for pedestals/puddles:
    // Any remaining faint shadow or white platform at the bottom (below boots)
    if (isChar) {
      // Find where boots/character feet are by scanning from bottom up
      let bottomFeetY = 0;
      for (let y = h - 1; y >= Math.floor(h * 0.7); y--) {
        let hasColoredFoot = false;
        for (let x = Math.floor(w * 0.2); x < Math.floor(w * 0.8); x++) {
          const p = (y * w + x) * 4;
          if (data[p + 3] > 50) {
            const r = data[p], g = data[p + 1], b = data[p + 2];
            // Blue boots / shoes have high blue and lower red
            if (b > r + 30 && r < 140) {
              hasColoredFoot = true;
              break;
            }
          }
        }
        if (hasColoredFoot) {
          bottomFeetY = y;
          break;
        }
      }

      // If feet were detected, erase all pixels below feet + 4px
      if (bottomFeetY > 0) {
        for (let y = bottomFeetY + 4; y < h; y++) {
          for (let x = 0; x < w; x++) {
            const p = (y * w + x) * 4;
            data[p + 3] = 0;
          }
        }
      }
    }

    // 3. Edge defringing: remove lingering white/faint halo on boundary pixels
    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        const idx = y * w + x;
        const p = idx * 4;
        if (data[p + 3] > 0) {
          const hasTransNeighbor =
            data[(p - 4) + 3] === 0 ||
            data[(p + 4) + 3] === 0 ||
            data[(p - w * 4) + 3] === 0 ||
            data[(p + w * 4) + 3] === 0;

          if (hasTransNeighbor) {
            const r = data[p], g = data[p + 1], b = data[p + 2];
            // If it's a white fringe pixel bordering transparency
            if (r > 220 && g > 220 && b > 220) {
              data[p + 3] = 0;
            } else if (r > 200 && g > 200 && b > 200 && (Math.max(r,g,b) - Math.min(r,g,b)) < 20) {
              data[p + 3] = Math.max(0, data[p + 3] - 150);
            }
          }
        }
      }
    }

    ctx.putImageData(imgData, 0, 0);

    // 4. Tight bounding box
    let minX = w, maxX = 0, minY = h, maxY = 0;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const p = (y * w + x) * 4;
        if (data[p + 3] > 20) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    if (minX >= maxX || minY >= maxY) {
      minX = 0; maxX = w; minY = 0; maxY = h;
    }

    const pad = 4;
    minX = Math.max(0, minX - pad);
    minY = Math.max(0, minY - pad);
    maxX = Math.min(w - 1, maxX + pad);
    maxY = Math.min(h - 1, maxY + pad);

    const tw = maxX - minX + 1;
    const th = maxY - minY + 1;

    const tight = document.createElement('canvas');
    tight.width = tw;
    tight.height = th;
    const tctx = tight.getContext('2d');
    tctx.drawImage(canvas, minX, minY, tw, th, 0, 0, tw, th);

    return tight.toDataURL('image/png').replace(/^data:image\/png;base64,/, '');
  }, { b64: base64, isChar: isMascot });

  return Buffer.from(result, 'base64');
}

module.exports = { cleanAndTightCrop };
