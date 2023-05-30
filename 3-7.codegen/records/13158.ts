import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://mywoodnymph.com/promo/');
  await page.locator('.arrow-go').click();
  await page.locator('canvas').click({
    position: {
      x: 646,
      y: 607
    }
  });
  await page.getByRole('img').nth(1).click();
  await page.getByRole('img').nth(1).click();
  await page.getByRole('img').nth(1).click();
  await page.getByRole('img').nth(1).click();
});