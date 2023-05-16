import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://boxpop.feelsplay.com/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 297,
      y: 419
    }
  });
});