import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://mobile.nappyroots.com/');
  await page.goto('https://mobile.nappyroots.com/blog');
});