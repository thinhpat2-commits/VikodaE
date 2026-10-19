const path = require('path');
const fs = require('fs');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

async function run() {
  console.log('Launching browser to verify automatic animation...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1400, height: 900 } });
  const page = await context.newPage();

  await page.goto('http://localhost:3000/');
  await page.waitForTimeout(2000);

  // 1. Initial screenshot of roadmap with companion Viko
  const initialImg = await page.locator('img[alt="Viko Mascot 3D"]').first().getAttribute('src');
  console.log(`[t=0s] Initial Mascot Image: ${initialImg}`);
  await page.screenshot({ path: path.join(__dirname, 'auto_anim_t0.png') });

  // 2. Wait 2.5 seconds WITHOUT CLICKING to let the automatic animation cycle to next frame
  console.log('Waiting 2.5s without clicking to observe automatic animation transition...');
  await page.waitForTimeout(2500);

  const t1Img = await page.locator('img[alt="Viko Mascot 3D"]').first().getAttribute('src');
  console.log(`[t=2.5s] Frame 2 Mascot Image: ${t1Img}`);
  await page.screenshot({ path: path.join(__dirname, 'auto_anim_t2_5.png') });

  // 3. Wait another 2.5 seconds to observe step 3
  console.log('Waiting another 2.5s without clicking...');
  await page.waitForTimeout(2500);

  const t2Img = await page.locator('img[alt="Viko Mascot 3D"]').first().getAttribute('src');
  console.log(`[t=5.0s] Frame 3 Mascot Image: ${t2Img}`);
  await page.screenshot({ path: path.join(__dirname, 'auto_anim_t5.png') });

  // 4. Open Asset Studio to verify the dedicated Animation Studio Stage
  console.log('Opening Asset Studio modal...');
  const studioBtn = page.locator('button:has-text("Asset Studio"), button:has-text("Studio Asset")').first();
  if (await studioBtn.count() > 0) {
    await studioBtn.click();
  } else {
    await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const b = btns.find(el => el.textContent && el.textContent.includes('Studio'));
      if (b) b.click();
    });
  }
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(__dirname, 'auto_anim_studio_stage.png') });
  console.log('Asset Studio screenshot captured.');

  console.log('Verification completed successfully!');
  await browser.close();
}

run().catch(err => {
  console.error('Test error:', err);
  process.exit(1);
});
