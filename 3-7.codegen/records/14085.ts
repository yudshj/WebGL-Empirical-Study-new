import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://parus.fun/');
  await page.locator('div').filter({ hasText: /^123$/ }).nth(1).click();
  await page.locator('.game').first().click();
  await page.locator('div').filter({ hasText: /^11$/ }).getByRole('img').nth(2).click();
  await page.locator('canvas').click({
    position: {
      x: 1190,
      y: 422
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1187,
      y: 640
    }
  });
});