import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://weneedwards.com/invoker/');
  await page.locator('#canvas').click({
    position: {
      x: 481,
      y: 404
    }
  });
});