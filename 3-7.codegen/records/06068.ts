import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://brain.louis030195.com/');
  await page.goto('https://brain.louis030195.com/README');
});