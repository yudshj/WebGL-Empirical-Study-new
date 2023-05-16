import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.mixmastermike.com/');
  await page.getByRole('link', { name: 'Enter' }).click();
});