import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://pone.listenanddonate.com/');
  await page.locator('.onetrust-pc-dark-filter').click();
  await page.getByRole('alertdialog', { name: 'Privacy' }).getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Enter the experience' }).click();
});