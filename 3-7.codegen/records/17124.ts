import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://toahi.net/');
  await page.getByRole('link', { name: '東亜重工' }).click();
  await page.getByRole('link', { name: 'Works' }).click();
  await page.getByRole('link', { name: '大雪海のカイナ' }).click();
});