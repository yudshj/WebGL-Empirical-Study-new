import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://david.li/paint/');
  await page.locator('canvas').click({
    position: {
      x: 486,
      y: 270
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 695,
      y: 280
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 422,
      y: 452
    }
  });
});