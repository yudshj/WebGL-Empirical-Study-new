import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://ayakotaniguchi.jp/');
  await page.locator('#start_play_btn path').click();
  await page.locator('#open_btn').click();
  await page.locator('#open_btn').click();
});