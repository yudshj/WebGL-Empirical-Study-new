import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://eneselnet.com/');
  await page.getByRole('button', { name: 'Close' }).click();
});