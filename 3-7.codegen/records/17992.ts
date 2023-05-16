import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://virtualshowroom.nissan.com.eg/');
  await page.goto('https://virtualshowroom.nissan.com.eg/en/');
});