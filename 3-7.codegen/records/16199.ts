import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://sourceacademy.org/');
  await page.goto('https://sourceacademy.org/playground');
});