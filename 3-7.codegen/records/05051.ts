import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://app.speakandimprove.com/legal/cookie-policy');
  await page.getByRole('button', { name: 'Accept all cookies' }).click();
});