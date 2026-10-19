const path = require('path');
const fs = require('fs');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1200, height: 800 } });
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { background: #003882; color: white; font-family: sans-serif; display: flex; flex-wrap: wrap; gap: 20px; padding: 20px; }
        .card { background: rgba(255,255,255,0.1); border-radius: 12px; padding: 12px; text-align: center; }
        img { width: 160px; height: 160px; object-fit: contain; border: 1px dashed rgba(255,255,255,0.3); background: repeating-conic-gradient(#555 0% 25%, #333 0% 50%) 50% / 20px 20px; }
      </style>
    </head>
    <body>
      <div class='card'><div>heart_purple_3d</div><img src='http://localhost:3000/assets/heart_purple_3d.png' /></div>
      <div class='card'><div>node_star_gold_3d</div><img src='http://localhost:3000/assets/node_star_gold_3d.png' /></div>
      <div class='card'><div>node_stone_lock_3d</div><img src='http://localhost:3000/assets/node_stone_lock_3d.png' /></div>
      <div class='card'><div>streak_fire_3d</div><img src='http://localhost:3000/assets/streak_fire_3d.png' /></div>
      <div class='card'><div>viko_mascot_3d</div><img src='http://localhost:3000/assets/viko_mascot_3d.png' /></div>
      <div class='card'><div>mascot_jump_cheer</div><img src='http://localhost:3000/assets/mascot_jump_cheer.png' /></div>
      <div class='card'><div>mascot_sad_cry</div><img src='http://localhost:3000/assets/mascot_sad_cry.png' /></div>
      <div class='card'><div>node_water_cyan_3d</div><img src='http://localhost:3000/assets/node_water_cyan_3d.png' /></div>
    </body>
    </html>
  `;
  
  await page.setContent(html);
  await page.waitForTimeout(1000);
  const outPath = path.resolve('scratch/check_transparency.png');
  await page.screenshot({ path: outPath });
  console.log('Saved check to:', outPath);
  await browser.close();
})();
