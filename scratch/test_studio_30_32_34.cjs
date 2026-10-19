const path = require('path');
const fs = require('fs');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  
  console.log('Navigating to http://localhost:3000/ ...');
  await page.goto('http://localhost:3000/');
  await page.waitForTimeout(1500);

  // Open Studio Asset Modal
  const studioBtn = page.locator('button:has-text("Studio Asset")').first();
  await studioBtn.click();
  await page.waitForTimeout(600);

  // 1. Select Item 30
  console.log('Selecting Item 30 (Listening)...');
  const item30 = page.locator('button:has-text("30. Icon 3D Listening")').first();
  await item30.scrollIntoViewIfNeeded();
  await item30.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scratch/screenshot_item30.png' });
  console.log('Saved scratch/screenshot_item30.png');

  // 2. Select Item 32
  console.log('Selecting Item 32 (Writing)...');
  const item32 = page.locator('button:has-text("32. Icon 3D Writing")').first();
  await item32.scrollIntoViewIfNeeded();
  await item32.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scratch/screenshot_item32.png' });
  console.log('Saved scratch/screenshot_item32.png');

  // 3. Select Item 34
  console.log('Selecting Item 34 (Perfect Score)...');
  const item34 = page.locator('button:has-text("34. Huy Hiệu Điểm Tuyệt Đối")').first();
  await item34.scrollIntoViewIfNeeded();
  await item34.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scratch/screenshot_item34.png' });
  console.log('Saved scratch/screenshot_item34.png');

  await browser.close();
  console.log('TEST FINISHED SUCCESSFULLY!');
})();
