import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://cjbayron.github.io/audiate/');
  await page.getByRole('button', { name: 'START' }).click();
  await page.getByRole('button', { name: 'START' }).click();
});