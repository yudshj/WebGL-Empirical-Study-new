import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://cloud.tpcashow.com/');
  await page.locator('#colorbox').click({
    position: {
      x: 229,
      y: 205
    }
  });
});