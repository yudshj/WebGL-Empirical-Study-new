import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.keyboard-heroes.com/');
  await page.locator('canvas').click({
    position: {
      x: 266,
      y: 185
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1066,
      y: 352
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 640,
      y: 224
    }
  });
});