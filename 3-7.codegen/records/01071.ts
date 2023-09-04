import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://jeffangellmakeup.com/');
  await page.locator('canvas').click({
    position: {
      x: 673,
      y: 338
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 629,
      y: 487
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 825,
      y: 315
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1111,
      y: 137
    }
  });
});