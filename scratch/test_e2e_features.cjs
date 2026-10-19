const path = require('path');
const fs = require('fs');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  
  await page.goto('http://localhost:3000/');
  await page.waitForTimeout(1500);

  // 1. Click mascot to open dialogue and trigger auto-speech
  const vikoContainer = page.locator('div[title*="Tap to Chat"]').first();
  await vikoContainer.click();
  await page.waitForTimeout(600);

  // Take screenshot with dialogue open
  await page.screenshot({ path: 'scratch/screenshot_dialogue_active.png' });
  console.log('Saved scratch/screenshot_dialogue_active.png');

  // 2. Click "Next ↻" to see next caring dialogue
  const nextBtn = page.locator('button:has-text("Next ↻")').first();
  if (await nextBtn.count() > 0) {
    await nextBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'scratch/screenshot_dialogue_caring.png' });
    console.log('Saved scratch/screenshot_dialogue_caring.png');
  }

  // 3. Open Studio Asset Modal
  const studioBtn = page.locator('button:has-text("Studio Asset")').first();
  if (await studioBtn.count() > 0) {
    await studioBtn.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'scratch/screenshot_studio_updated.png' });
    console.log('Saved scratch/screenshot_studio_updated.png');
  }

  await browser.close();
  console.log('E2E tests finished successfully!');
})();
