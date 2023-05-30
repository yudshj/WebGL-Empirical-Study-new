import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://yuta-takahashi.dev/');
  await page.getByRole('button', { name: 'next' }).click();
  await page.getByRole('button', { name: 'next' }).click();
  await page.getByRole('button', { name: 'next' }).click();
  await page.getByRole('button', { name: 'next' }).click();
});