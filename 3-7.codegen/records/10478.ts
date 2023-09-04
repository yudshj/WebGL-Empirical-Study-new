import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://impress.pcon-solutions.com/');
  await page.getByRole('button', { name: 'Select all' }).click();
});