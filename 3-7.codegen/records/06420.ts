import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://casino.gp2fun.com/html5/casino/');
  await page.locator('canvas').click({
    position: {
      x: 616,
      y: 435
    }
  });
});