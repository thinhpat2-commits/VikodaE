const path = require('path');
const fs = require('fs');
const playwrightPkg = path.join(process.env.LOCALAPPDATA, 'ms-playwright-go', '1.57.0', 'package');
const { chromium } = require(playwrightPkg);

async function run() {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });

  console.log('Navigating to http://localhost:3000/ ...');
  await page.goto('http://localhost:3000/');
  await page.waitForTimeout(2000);

  // 1. Right Panel Mascot Widget Screenshot
  await page.screenshot({ path: 'scratch/screenshot_screen_overview.png' });
  console.log('Saved scratch/screenshot_screen_overview.png');

  // Click 'Chiến' mood in right panel
  const chienBtn = page.locator('button:has-text("Chiến")').first();
  if (await chienBtn.isVisible()) {
    await chienBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'scratch/screenshot_panel_mascot_chien.png' });
    console.log('Saved scratch/screenshot_panel_mascot_chien.png');
  }

  // Click 'Quẩy' mood in right panel
  const quayBtn = page.locator('button:has-text("Quẩy")').first();
  if (await quayBtn.isVisible()) {
    await quayBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'scratch/screenshot_panel_mascot_quay.png' });
    console.log('Saved scratch/screenshot_panel_mascot_quay.png');
  }

  // 2. Click Draggable Viko Companion to open dialogue
  const companion = page.locator('div[title*="Tap to Chat"]').first();
  if (await companion.isVisible()) {
    await companion.click();
    await page.waitForTimeout(600);
    await page.screenshot({ path: 'scratch/screenshot_companion_dialogue.png' });
    console.log('Saved scratch/screenshot_companion_dialogue.png');

    // Click 'Ngầu 😎' in dialogue pose bar
    const ngauPose = page.locator('button:has-text("Ngầu 😎")').first();
    if (await ngauPose.isVisible()) {
      await ngauPose.click();
      await page.waitForTimeout(500);
      await page.screenshot({ path: 'scratch/screenshot_companion_ngau.png' });
      console.log('Saved scratch/screenshot_companion_ngau.png');
    }

    // Click 'Chai 💧' in dialogue pose bar
    const chaiPose = page.locator('button:has-text("Chai 💧")').first();
    if (await chaiPose.isVisible()) {
      await chaiPose.click();
      await page.waitForTimeout(500);
      await page.screenshot({ path: 'scratch/screenshot_companion_chai.png' });
      console.log('Saved scratch/screenshot_companion_chai.png');
    }
  }

  // 3. Open Asset Studio Modal
  // Find studio button in left sidebar
  const studioBtn = page.locator('button:has-text("Studio"), button:has-text("Asset Studio"), [title*="Studio"]').first();
  if (await studioBtn.isVisible()) {
    await studioBtn.click();
  } else {
    // Dispatch custom event or open via evaluate
    await page.evaluate(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.includes('Studio'));
      if (btn) btn.click();
    });
  }

  await page.waitForTimeout(800);
  await page.screenshot({ path: 'scratch/screenshot_studio_all_grid.png' });
  console.log('Saved scratch/screenshot_studio_all_grid.png');

  // Click category 'Hiệu Ứng 3D'
  const effectCatBtn = page.locator('button:has-text("Hiệu Ứng 3D")').first();
  if (await effectCatBtn.isVisible()) {
    await effectCatBtn.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'scratch/screenshot_studio_effects_category.png' });
    console.log('Saved scratch/screenshot_studio_effects_category.png');
  }

  // Click asset 36 (Lửa Combo)
  const luaCard = page.locator('text=36. Hiệu Ứng Lửa Combo').first();
  if (await luaCard.isVisible()) {
    await luaCard.click();
    await page.waitForTimeout(500);
    await page.screenshot({ path: 'scratch/screenshot_studio_effect_fire_selected.png' });
    console.log('Saved scratch/screenshot_studio_effect_fire_selected.png');
  }

  // Click List view mode
  const listModeBtn = page.locator('button[title*="List View"]').first();
  if (await listModeBtn.isVisible()) {
    await listModeBtn.click();
    await page.waitForTimeout(400);
    await page.screenshot({ path: 'scratch/screenshot_studio_list_view.png' });
    console.log('Saved scratch/screenshot_studio_list_view.png');
  }

  // Test search: type "khoáng"
  const searchInput = page.locator('input[placeholder*="Tìm theo tên"]').first();
  if (await searchInput.isVisible()) {
    await searchInput.fill('khoáng');
    await page.waitForTimeout(400);
    await page.screenshot({ path: 'scratch/screenshot_studio_search_khoang.png' });
    console.log('Saved scratch/screenshot_studio_search_khoang.png');
  }

  await browser.close();
  console.log('All verification screenshots captured successfully!');
}

run().catch(err => {
  console.error('Error during test:', err);
  process.exit(1);
});
