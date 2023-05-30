import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://2021.fanzone36.com/');
  await page.goto('https://2021.fanzone36.com/en/');
  await page.goto('https://2021.fanzone36.com/en/home');
});