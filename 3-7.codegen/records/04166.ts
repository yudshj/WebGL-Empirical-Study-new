import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://2020-dm.com/');
  await page.getByRole('link', { name: 'Check out 2020' }).click();
  await page.getByRole('link', { name: 'Go to next month' }).click();
  await page.getByRole('link', { name: 'Go to next month' }).click();
  await page.getByRole('link', { name: 'Go to next month' }).click();
});