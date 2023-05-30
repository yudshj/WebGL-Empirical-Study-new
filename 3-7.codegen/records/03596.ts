import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.rysianka.vot.pl/');
  await page.getByRole('link', { name: '' }).click();
  await page.getByRole('link', { name: 'O nas' }).click();
  await page.getByRole('link', { name: 'Oferta' }).click();
  await page.getByRole('link', { name: 'Rezerwacje' }).click();
  await page.getByRole('link', { name: 'Kamery' }).click();
  await page.getByRole('link', { name: 'Kontakt' }).click();
});