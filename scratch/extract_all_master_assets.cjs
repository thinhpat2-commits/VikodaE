const path = require('path');
const fs = require('fs');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

/**
 * Extracts and thoroughly cleans assets from:
 * 1. scratch/temp_concept.png (2400 x 1792)
 * 2. scratch/temp_dl.png (1200 x 896)
 */
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const conceptB64 = fs.readFileSync('scratch/temp_concept.png').toString('base64');
  const posesB64 = fs.readFileSync('scratch/temp_dl.png').toString('base64');

  const assetsToExtract = [
    // --- FROM MASTER SHEET (temp_concept.png: 2400 x 1792) ---
    {
      source: 'concept',
      filename: 'viko_mascot_3d.png',
      isMascot: true,
      // Viko standing: x: 100..600, y: 100..850 (strictly above the gold star button)
      box: { x: 110, y: 100, w: 500, h: 720 },
      protectTorso: { rx1: 0.2, rx2: 0.75, ry1: 0.45, ry2: 0.75 }
    },
    {
      source: 'concept',
      filename: 'streak_fire_3d.png',
      isMascot: false,
      // 3D Fire flame: top middle x: 670..1020, y: 100..570
      box: { x: 670, y: 100, w: 350, h: 480 },
    },
    {
      source: 'concept',
      filename: 'heart_red_3d.png',
      isMascot: false,
      box: { x: 1070, y: 160, w: 280, h: 280 },
    },
    {
      source: 'concept',
      filename: 'heart_purple_3d.png',
      isMascot: false,
      box: { x: 1370, y: 160, w: 280, h: 280 },
    },
    {
      source: 'concept',
      filename: 'gem_cyan_3d.png',
      isMascot: false,
      box: { x: 1060, y: 550, w: 200, h: 250 },
    },
    {
      source: 'concept',
      filename: 'gem_emerald_3d.png',
      isMascot: false,
      box: { x: 1270, y: 550, w: 220, h: 250 },
    },
    {
      source: 'concept',
      filename: 'chest_closed_3d.png',
      isMascot: false,
      box: { x: 1540, y: 440, w: 380, h: 440 },
    },
    {
      source: 'concept',
      filename: 'chest_open_3d.png',
      isMascot: false,
      box: { x: 1870, y: 480, w: 450, h: 540 },
    },
    {
      source: 'concept',
      filename: 'node_star_gold_3d.png',
      isMascot: false,
      box: { x: 110, y: 920, w: 350, h: 320 },
    },
    {
      source: 'concept',
      filename: 'node_water_cyan_3d.png',
      isMascot: false,
      box: { x: 500, y: 900, w: 390, h: 340 },
    },
    {
      source: 'concept',
      filename: 'node_stone_water_3d.png',
      isMascot: false,
      box: { x: 940, y: 900, w: 370, h: 340 },
    },
    {
      source: 'concept',
      filename: 'node_stone_lock_3d.png',
      isMascot: false,
      box: { x: 1370, y: 900, w: 370, h: 340 },
    },
    {
      source: 'concept',
      filename: 'trophy_danhthanh_3d.png',
      isMascot: false,
      box: { x: 1880, y: 1080, w: 420, h: 500 },
    },
    {
      source: 'concept',
      filename: 'skill_speaking_3d.png',
      isMascot: false,
      box: { x: 110, y: 1300, w: 320, h: 320 },
    },
    {
      source: 'concept',
      filename: 'skill_listening_3d.png',
      isMascot: false,
      box: { x: 490, y: 1300, w: 320, h: 320 },
    },
    {
      source: 'concept',
      filename: 'skill_reading_3d.png',
      isMascot: false,
      box: { x: 860, y: 1300, w: 320, h: 320 },
    },
    {
      source: 'concept',
      filename: 'skill_writing_3d.png',
      isMascot: false,
      box: { x: 1220, y: 1300, w: 320, h: 320 },
    },

    // --- FROM MASCOT POSES STUDY SHEET (temp_dl.png: 1200 x 896) ---
    {
      source: 'poses',
      filename: 'mascot_happy.png',
      isMascot: true,
      // Pose 1: Front wave x: 30..250, y: 90..400
      box: { x: 30, y: 90, w: 230, h: 310 },
      protectTorso: { rx1: 0.2, rx2: 0.8, ry1: 0.45, ry2: 0.8 }
    },
    {
      source: 'poses',
      filename: 'mascot_wave.png',
      isMascot: true,
      // Pose 2: 3/4 happy stand x: 260..450, y: 110..400
      box: { x: 260, y: 110, w: 200, h: 290 },
      protectTorso: { rx1: 0.2, rx2: 0.8, ry1: 0.45, ry2: 0.8 }
    },
    {
      source: 'poses',
      filename: 'mascot_jump_cheer.png',
      isMascot: true,
      // Pose 3: 3/4 jumping in air x: 460..660, y: 110..400
      box: { x: 460, y: 110, w: 210, h: 290 },
      protectTorso: { rx1: 0.2, rx2: 0.8, ry1: 0.45, ry2: 0.8 }
    },
    {
      source: 'poses',
      filename: 'mascot_sad_cry.png',
      isMascot: true,
      // Pose 4: Front sad tear x: 670..860, y: 110..400
      box: { x: 670, y: 110, w: 210, h: 290 },
      protectTorso: { rx1: 0.2, rx2: 0.8, ry1: 0.45, ry2: 0.8 }
    },
    {
      source: 'poses',
      filename: 'mascot_back_view.png',
      isMascot: true,
      box: { x: 870, y: 130, w: 140, h: 270 },
      protectTorso: { rx1: 0.2, rx2: 0.8, ry1: 0.45, ry2: 0.8 }
    },
    {
      source: 'poses',
      filename: 'mascot_surprised.png',
      isMascot: true,
      // Pose 7: Front surprised x: 50..220, y: 550..800
      box: { x: 50, y: 550, w: 180, h: 260 },
      protectTorso: { rx1: 0.2, rx2: 0.8, ry1: 0.45, ry2: 0.8 }
    },
    {
      source: 'poses',
      filename: 'mascot_thinking.png',
      isMascot: true,
      // Pose 9: Front thinking x: 570..750, y: 550..820
      box: { x: 570, y: 550, w: 190, h: 280 },
      protectTorso: { rx1: 0.2, rx2: 0.8, ry1: 0.45, ry2: 0.8 }
    },
    {
      source: 'poses',
      filename: 'mascot_idea.png',
      isMascot: true,
      // Pose 10: 3/4 thinking with lightbulb x: 760..980, y: 500..800
      box: { x: 760, y: 500, w: 220, h: 320 },
      protectTorso: { rx1: 0.2, rx2: 0.8, ry1: 0.45, ry2: 0.8 }
    }
  ];

  for (const item of assetsToExtract) {
    const srcB64 = item.source === 'concept' ? conceptB64 : posesB64;
    console.log(`Processing & thoroughly cleaning: ${item.filename}...`);

    const cleanedB64 = await page.evaluate(async ({ b64, itemCfg }) => {
      const img = new Image();
      img.src = 'data:image/png;base64,' + b64;
      await new Promise(r => img.onload = r);

      const { box, isMascot, protectTorso } = itemCfg;
      const canvas = document.createElement('canvas');
      canvas.width = box.w;
      canvas.height = box.h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, box.x, box.y, box.w, box.h, 0, 0, box.w, box.h);

      const imgData = ctx.getImageData(0, 0, box.w, box.h);
      const data = imgData.data;
      const w = box.w;
      const h = box.h;

      // 1. BFS Flood Fill from outer edges
      const visited = new Uint8Array(w * h);
      const queue = [];

      function isBgPixel(x, y) {
        const idx = y * w + x;
        const p = idx * 4;
        const a = data[p + 3];
        if (a < 15) return true;

        const r = data[p], g = data[p + 1], b = data[p + 2];
        const maxC = Math.max(r, g, b);
        const minC = Math.min(r, g, b);
        const sat = maxC - minC;

        // Pure white or off-white background
        if (r > 235 && g > 235 && b > 235) return true;

        // Light grey vignette / boundary
        if (minC > 215 && sat < 25) return true;

        // Ground shadow (neutral grey or faint blue, low saturation, below 70% height)
        if (y > h * 0.7 && minC > 175 && sat < 35) return true;

        return false;
      }

      function isProtected(x, y) {
        if (!isMascot || !protectTorso) return false;
        const rx = x / w;
        const ry = y / h;
        if (rx >= protectTorso.rx1 && rx <= protectTorso.rx2 && ry >= protectTorso.ry1 && ry <= protectTorso.ry2) {
          const p = (y * w + x) * 4;
          const r = data[p], g = data[p + 1], b = data[p + 2];
          // Protect white/light shirt pixels in chest area!
          if (r > 180 && g > 180 && b > 180) return true;
        }
        return false;
      }

      function pushIfBg(x, y) {
        if (x < 0 || x >= w || y < 0 || y >= h) return;
        const idx = y * w + x;
        if (visited[idx]) return;
        if (isProtected(x, y)) return;

        if (isBgPixel(x, y)) {
          visited[idx] = 1;
          queue.push(idx);
        }
      }

      // Seed all 4 borders
      for (let x = 0; x < w; x++) { pushIfBg(x, 0); pushIfBg(x, h - 1); }
      for (let y = 0; y < h; y++) { pushIfBg(0, y); pushIfBg(w - 1, y); }

      let head = 0;
      while (head < queue.length) {
        const curr = queue[head++];
        const cx = curr % w;
        const cy = Math.floor(curr / w);
        const p = curr * 4;

        data[p + 3] = 0; // Transparent!

        pushIfBg(cx + 1, cy);
        pushIfBg(cx - 1, cy);
        pushIfBg(cx, cy + 1);
        pushIfBg(cx, cy - 1);
      }

      // 2. Extra bottom cleanup for mascots (erase lingering floor shadows below boots)
      if (isMascot) {
        let bottomFeetY = 0;
        for (let y = h - 1; y >= Math.floor(h * 0.6); y--) {
          let hasBlueShoe = false;
          for (let x = Math.floor(w * 0.15); x < Math.floor(w * 0.85); x++) {
            const p = (y * w + x) * 4;
            if (data[p + 3] > 60) {
              const r = data[p], g = data[p + 1], b = data[p + 2];
              // Blue boots have prominent blue channel
              if (b > r + 25 && b > 80 && r < 140) {
                hasBlueShoe = true;
                break;
              }
            }
          }
          if (hasBlueShoe) {
            bottomFeetY = y;
            break;
          }
        }
        if (bottomFeetY > 0) {
          for (let y = bottomFeetY + 3; y < h; y++) {
            for (let x = 0; x < w; x++) {
              data[(y * w + x) * 4 + 3] = 0;
            }
          }
        }
      }

      // 3. Edge defringing: removes white fringes/halos
      for (let y = 1; y < h - 1; y++) {
        for (let x = 1; x < w - 1; x++) {
          const idx = y * w + x;
          const p = idx * 4;
          if (data[p + 3] > 0) {
            const hasTrans =
              data[(p - 4) + 3] === 0 ||
              data[(p + 4) + 3] === 0 ||
              data[(p - w * 4) + 3] === 0 ||
              data[(p + w * 4) + 3] === 0;

            if (hasTrans) {
              const r = data[p], g = data[p + 1], b = data[p + 2];
              if (r > 220 && g > 220 && b > 220) {
                data[p + 3] = 0; // Wipe white fringe
              } else if (r > 200 && g > 200 && b > 200 && (Math.max(r,g,b) - Math.min(r,g,b)) < 25) {
                data[p + 3] = Math.max(0, data[p + 3] - 160);
              }
            }
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);

      // 4. Tight crop to visible content
      let minX = w, maxX = 0, minY = h, maxY = 0;
      for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
          const p = (y * w + x) * 4;
          if (data[p + 3] > 15) {
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

      const pad = 3;
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
    }, { b64: srcB64, itemCfg: item });

    const targetPath = path.resolve('public/assets', item.filename);
    fs.writeFileSync(targetPath, Buffer.from(cleanedB64, 'base64'));
    console.log(`Saved pristine transparent: ${item.filename}`);
  }

  await browser.close();
  console.log('ALL MASTER ASSETS THOROUGHLY EXTRACTED, DEFRINGED & SAVED!');
})();
