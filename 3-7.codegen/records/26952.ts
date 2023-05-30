import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.songshizhao.com/webgl/pages/FlappyBird3D.aspx');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('canvas').click({
    position: {
      x: 657,
      y: 306
    }
  });
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('canvas').click({
    clickCount: 6,
    position: {
      x: 795,
      y: 146
    }
  });
});