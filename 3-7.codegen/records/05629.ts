import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://bbsway.it/');
  await page.getByText('Enter your world').click();
  await page.getByRole('button', { name: 'Close banner' }).click();
});