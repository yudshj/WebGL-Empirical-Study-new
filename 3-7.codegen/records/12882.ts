import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://moment-zero.com/');
  await page.getByRole('link', { name: 'S t a r t' }).click();
});