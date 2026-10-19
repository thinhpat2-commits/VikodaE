const path = require('path');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: 'scratch/screenshot_home_living_guide.png' });
  console.log('Saved scratch/screenshot_home_living_guide.png');

  // Click on the living mascot guide to test touch reaction
  const guideMascot = await page.locator('div[title*="Chạm vào Viko"]').first();
  if (await guideMascot.isVisible()) {
    await guideMascot.click();
    await page.waitForTimeout(600);
    await page.screenshot({ path: 'scratch/screenshot_home_guide_clicked.png' });
    console.log('Saved scratch/screenshot_home_guide_clicked.png');
  }

  await browser.close();
})();
