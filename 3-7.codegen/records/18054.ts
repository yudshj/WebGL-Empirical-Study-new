import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://vitus.vn/Vitus/Services');
  await page.getByRole('link', { name: 'Chỉ số của tôi' }).click();
  await page.goto('https://vitus.vn/Vitus/Services');
  await page.getByRole('link', { name: 'Phân tích cá nhân' }).click();
});