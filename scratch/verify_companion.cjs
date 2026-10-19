const path = require('path');
const fs = require('fs');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  
  await page.goto('http://localhost:3000/');
  await page.waitForTimeout(2000);
  
  // 1. Screenshot home screen path
  await page.screenshot({ path: 'scratch/verify_path_clean.png' });
  console.log('Saved scratch/verify_path_clean.png');

  // 2. Click the draggable Viko mascot container to open dialogue
  const vikoContainer = page.locator('div[title*="Tap to Chat"]').first();
  if (await vikoContainer.count() > 0) {
    await vikoContainer.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'scratch/verify_viko_compact_chat.png' });
    console.log('Saved scratch/verify_viko_compact_chat.png');
  } else {
    console.log('Viko container not found');
  }

  await browser.close();
})();
