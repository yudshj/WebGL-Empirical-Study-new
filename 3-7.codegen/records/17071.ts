import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://threeview.hle.com.tw/');
  await page.getByRole('link', { name: '隨機變化' }).click();
  await page.getByRole('link', { name: '隨機變化' }).click();
  await page.getByRole('link', { name: '隨機變化' }).click();
  await page.getByRole('link', { name: '隨機變化' }).click();
});