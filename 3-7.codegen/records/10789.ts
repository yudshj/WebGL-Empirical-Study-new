import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://jachtczarter4u.com/');
  await page.getByRole('link', { name: 'do serwisu' }).click();
  await page.getByRole('button', { name: 'Ceny' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Laguna 730' }).click();
});