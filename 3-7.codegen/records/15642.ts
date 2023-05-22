import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://semiconductor.withgoogle.com/');
  await page.getByRole('button', { name: 'Start' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
});