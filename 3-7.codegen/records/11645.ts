import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://legacybuildings.custom3dbuilder.com/');
  await page.getByRole('combobox', { name: 'Select State' }).click();
  await page.locator('#bs-select-20-3').click();
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('combobox', { name: 'Asphalt' }).click();
  await page.locator('#bs-select-5-1').click();
});