import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://prior.co.jp/discover/en');
  await page.getByText('Explore').click();
  await page.getByRole('button', { name: 'scroll' }).click();
  await page.getByRole('button', { name: 'scroll' }).click();
  await page.getByRole('button', { name: 'scroll' }).click();
  await page.getByRole('button', { name: 'scroll' }).click();
});