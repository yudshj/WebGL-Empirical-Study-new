import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://ketakuma.com/');
  await page.locator('.index-mv__product--kuma__img > .js-load-first').click();
  await page.locator('.index-mv__product--kuma__img > .js-load-first').click();
  await page.locator('div:nth-child(6) > div > .js-load-first').click();
  await page.locator('.js-load-first').first().click();
  await page.locator('.js-load-first').first().click();
  await page.locator('#gallery').getByRole('img', { name: 'つぎ' }).click();
});