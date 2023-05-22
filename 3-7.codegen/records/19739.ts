import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.boranka.hr/');
  await page.locator('.boranka-landing__visit-forest').click();
  await page.getByRole('button', { name: 'ok' }).click();
  await page.getByRole('button', { name: 'ok' }).click();
  await page.getByRole('button', { name: 'ok' }).click();
  await page.locator('#appContainer canvas').click({
    position: {
      x: 429,
      y: 266
    }
  });
  await page.locator('.js-close-drawer').first().click();
});