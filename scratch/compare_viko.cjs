const path = require('path');
const fs = require('fs');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 900, height: 500 } });
  
  const b64Before = fs.readFileSync('public/assets/viko_mascot_3d.png').toString('base64');
  const b64After = fs.readFileSync('scratch/test_imgly_viko.png').toString('base64');

  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { background: #003882; color: white; font-family: sans-serif; display: flex; gap: 40px; padding: 40px; align-items: center; justify-content: center; }
        .box { text-align: center; background: repeating-conic-gradient(#555 0% 25%, #333 0% 50%) 50% / 20px 20px; border-radius: 12px; padding: 20px; border: 2px solid rgba(255,255,255,0.2); }
        img { height: 320px; object-fit: contain; }
      </style>
    </head>
    <body>
      <div class='box'><h3>BEFORE</h3><img src='data:image/png;base64,${b64Before}' /></div>
      <div class='box'><h3>AFTER (Neural Cutout)</h3><img src='data:image/png;base64,${b64After}' /></div>
    </body>
    </html>
  `;
  
  await page.setContent(html);
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scratch/compare_viko.png' });
  await browser.close();
  console.log('Saved comparison to scratch/compare_viko.png');
})();
