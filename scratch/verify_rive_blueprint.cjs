const path = require('path');
const fs = require('fs');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1400, height: 900 } });
  const page = await context.newPage();

  await page.goto('http://localhost:3000/');
  await page.waitForTimeout(1500);

  // 1. Move mouse to right side to verify cursor eye tracking tilt
  await page.mouse.move(1200, 300);
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(__dirname, 'eye_tracking_tilted.png') });
  console.log('Saved eye_tracking_tilted.png');

  // 2. Open Asset Studio
  const studioBtn = page.locator('button:has-text("Studio Asset")').first();
  await studioBtn.click();
  await page.waitForTimeout(600);

  // 3. Click the Strategy Guide button to expand the Rive & Minimalist Blueprint
  const guideBtn = page.locator('button:has-text("Chiến Lược Ép Cân Asset")').first();
  if (await guideBtn.isVisible()) {
    await guideBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: path.join(__dirname, 'studio_rive_blueprint_expanded.png') });
    console.log('Saved studio_rive_blueprint_expanded.png');
  }

  await browser.close();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
