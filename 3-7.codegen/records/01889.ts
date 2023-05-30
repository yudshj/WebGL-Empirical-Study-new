import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://snowworldindia.com/');
  await page.locator('#location-modal i').nth(3).click();
  await page.locator('canvas').click({
    position: {
      x: 851,
      y: 343
    }
  });
});