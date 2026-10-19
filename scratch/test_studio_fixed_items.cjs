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

  // 1. Select Item 14
  console.log('Selecting Item 14 (Viko Dancing)...');
  const item14 = page.locator('button:has-text("14. Viko Nhảy Múa")').first();
  await item14.scrollIntoViewIfNeeded();
  await item14.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scratch/screenshot_item14_fixed.png' });
  console.log('Saved scratch/screenshot_item14_fixed.png');

  // 2. Select Item 15
  console.log('Selecting Item 15 (Viko Microphone)...');
  const item15 = page.locator('button:has-text("15. Viko Cầm Micro")').first();
  await item15.scrollIntoViewIfNeeded();
  await item15.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scratch/screenshot_item15_fixed.png' });
  console.log('Saved scratch/screenshot_item15_fixed.png');

  // 3. Select Item 19
  console.log('Selecting Item 19 (Node Crown Boss)...');
  const item19 = page.locator('button:has-text("19. Nút Vương Miện")').first();
  await item19.scrollIntoViewIfNeeded();
  await item19.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scratch/screenshot_item19_fixed.png' });
  console.log('Saved scratch/screenshot_item19_fixed.png');

  // 4. Select Item 28
  console.log('Selecting Item 28 (Vikoda Bottle)...');
  const item28 = page.locator('button:has-text("28. Chai Nước Khoáng")').first();
  await item28.scrollIntoViewIfNeeded();
  await item28.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scratch/screenshot_item28_fixed.png' });
  console.log('Saved scratch/screenshot_item28_fixed.png');

  await browser.close();
  console.log('TEST FINISHED SUCCESSFULLY!');
})();
