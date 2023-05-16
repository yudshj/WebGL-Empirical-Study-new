import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://setpose.com/');
  await page.getByRole('button', { name: 'Timed challenge' }).click();
  await page.getByRole('button', { name: 'Start challenge' }).click();
});