import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 2500 });
  try {
    await page.goto('http://localhost:5173/');
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'contrast_check.png' });
    console.log('Screenshot saved as contrast_check.png');
  } catch (e) {
    console.error('Error:', e.message);
  } finally {
    await browser.close();
  }
})();
