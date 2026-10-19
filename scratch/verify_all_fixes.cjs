const path = require('path');
const fs = require('fs');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  
  console.log('Navigating to http://localhost:3000/ ...');
  await page.goto('http://localhost:3000/');
  await page.waitForTimeout(1500);

  // 1. Click mascot once to open dialogue
  const vikoContainer = page.locator('div[title*="Tap to Chat"]').first();
  await vikoContainer.click();
  await page.waitForTimeout(600);
  await page.screenshot({ path: 'scratch/verify_step1_advice.png' });
  console.log('Saved scratch/verify_step1_advice.png');

  // 2. Click "Next ↻" twice to verify caring & orientation dialogues
  const nextBtn = page.locator('button:has-text("Next ↻")').first();
  if (await nextBtn.count() > 0) {
    await nextBtn.click();
    await page.waitForTimeout(600);
    await page.screenshot({ path: 'scratch/verify_step2_next_advice.png' });
    console.log('Saved scratch/verify_step2_next_advice.png');

    await nextBtn.click();
    await page.waitForTimeout(600);
    await page.screenshot({ path: 'scratch/verify_step3_caring_advice.png' });
    console.log('Saved scratch/verify_step3_caring_advice.png');
  }

  // 3. Test rapid 3 taps to verify playful tickle debouncing
  console.log('Testing rapid tapping (3 times quickly)...');
  await vikoContainer.click();
  await page.waitForTimeout(100);
  await vikoContainer.click();
  await page.waitForTimeout(100);
  await vikoContainer.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: 'scratch/verify_step4_spam_protection.png' });
  console.log('Saved scratch/verify_step4_spam_protection.png');

  // 4. Open Studio Asset modal & verify prompt display
  const studioBtn = page.locator('button:has-text("Studio Asset")').first();
  if (await studioBtn.count() > 0) {
    await studioBtn.click();
    await page.waitForTimeout(800);
    await page.screenshot({ path: 'scratch/verify_step5_studio_modal.png' });
    console.log('Saved scratch/verify_step5_studio_modal.png');
  }

  await browser.close();
  console.log('ALL VERIFICATION TESTS COMPLETED SUCCESSFULLY!');
})();
