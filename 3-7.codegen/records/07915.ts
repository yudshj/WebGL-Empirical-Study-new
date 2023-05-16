import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://dronesafetygame.com/');
  await page.locator('#canvas_ui').click({
    position: {
      x: 1046,
      y: 614
    }
  });
});