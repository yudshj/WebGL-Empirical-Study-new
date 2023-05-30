import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.cm-covilha.pt/');
  await page.getByRole('link', { name: 'Viver' }).click();
  await page.getByRole('link', { name: 'Visitar' }).click();
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await page.getByRole('link', { name: 'EN', exact: true }).click();
  await page.getByRole('link', { name: 'EN', exact: true }).click();
});