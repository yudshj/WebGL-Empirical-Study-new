import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://guccigrip.gucci.com/');
  await page.locator('canvas').click({
    position: {
      x: 669,
      y: 494
    }
  });
  await page.locator('html').click();
  await page.locator('canvas').click({
    position: {
      x: 687,
      y: 72
    }
  });
  await page.locator('html').click();
  await page.locator('canvas').click({
    position: {
      x: 667,
      y: 254
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 706,
      y: 194
    }
  });
});