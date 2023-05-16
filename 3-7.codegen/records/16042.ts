import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://smashkarts.io/');
  await page.locator('#gameCanvas').click({
    position: {
      x: 625,
      y: 573
    }
  });
});