import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://massiveclip.com/games/pro-drift/webGL/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 274,
      y: 336
    }
  });
});