import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://shadowart.withgoogle.com/?lang=en-us#');
  await page.locator('#btn_play').click();
});