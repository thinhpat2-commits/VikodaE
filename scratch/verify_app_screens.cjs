const path = require('path');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  // 1. Home Screen
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'scratch/screenshot_home_new.png' });
  console.log('Saved scratch/screenshot_home_new.png');

  // 2. Open Asset Studio Modal
  const studioBtn = await page.locator('text=Studio Asset 3D').first();
  if (await studioBtn.isVisible()) {
    await studioBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'scratch/screenshot_studio_new.png' });
    console.log('Saved scratch/screenshot_studio_new.png');
  }

  await browser.close();
})();
