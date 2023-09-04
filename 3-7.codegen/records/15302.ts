import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://portal.synthesis.is/');
  await page.goto('https://portal.synthesis.is/auth/sign-in');
});