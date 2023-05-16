import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.metaxa.com/');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.locator('#country-selection-button').click();
  await page.getByRole('option', { name: 'USA' }).click();
  await page.getByPlaceholder('DD').fill('01');
  await page.getByPlaceholder('MM').fill('01');
  await page.getByPlaceholder('YYYY').fill('1980');
  await page.getByRole('button', { name: 'ENTER' }).click();
});