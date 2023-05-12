import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://goinghome.302chanwoo.com/');
  await page.locator('canvas').click({
    position: {
      x: 633,
      y: 300
    }
  });
});