const path = require('path');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(2000);

  // 1. Screenshot initial state with draggable Viko
  await page.screenshot({ path: 'scratch/screenshot_draggable_viko_initial.png' });
  console.log('Saved initial state');

  // 2. Click Viko to trigger tap interaction & 100% English advice dialogue
  const vikoHandle = await page.locator('div[title*="Click to interact"]').first();
  if (await vikoHandle.isVisible()) {
    await vikoHandle.click();
    await page.waitForTimeout(600);
    await page.screenshot({ path: 'scratch/screenshot_draggable_viko_opened.png' });
    console.log('Saved opened dialogue state');

    // 3. Drag Viko to a new position (e.g. to the left side)
    const box = await vikoHandle.boundingBox();
    if (box) {
      await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
      await page.mouse.down();
      // Drag 400px to the left and 200px up
      await page.mouse.move(box.x - 400, box.y - 200, { steps: 10 });
      await page.mouse.up();
      await page.waitForTimeout(500);
      await page.screenshot({ path: 'scratch/screenshot_draggable_viko_dragged.png' });
      console.log('Saved dragged state');
    }
  }

  await browser.close();
})();
