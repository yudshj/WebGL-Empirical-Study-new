import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://fractalfantasy.net/');
  await page.goto('https://fractalfantasy.net/#miau');
});