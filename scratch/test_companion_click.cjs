const path = require('path');
const fs = require('fs');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

async function run() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1400, height: 900 } });
  const page = await context.newPage();

  await page.goto('http://localhost:3000/');
  await page.waitForTimeout(2000);

  // Click Viko to open clean speech bubble
  const companion = page.locator('div[title*="Viko Tự Động"]').first();
  await companion.click();
  await page.waitForTimeout(600);

  await page.screenshot({ path: path.join(__dirname, 'companion_bubble_opened.png') });
  console.log('Companion bubble opened screenshot saved.');

  // Close bubble
  const closeBtn = page.locator('button[title="Đóng"]').first();
  if (await closeBtn.isVisible()) {
    await closeBtn.click();
    await page.waitForTimeout(500);
    console.log('Closed dialogue.');
  }

  // Wait 2.5s to verify auto-animation resumes
  await page.waitForTimeout(2500);
  await page.screenshot({ path: path.join(__dirname, 'companion_resumed_auto.png') });
  console.log('Companion auto-anim resumed screenshot saved.');

  await browser.close();
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});
