import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://kocho-land-senki.sakura.ne.jp/');
  await page.locator('#UpperCanvas').click({
    position: {
      x: 408,
      y: 422
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 746,
      y: 376
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 379,
      y: 493
    }
  });
  await page.locator('#UpperCanvas').click({
    position: {
      x: 219,
      y: 249
    }
  });
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
});