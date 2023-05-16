import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://inagilib.sakura.ne.jp/');
  await page.locator('#UpperCanvas').click({
    position: {
      x: 408,
      y: 425
    }
  });
});