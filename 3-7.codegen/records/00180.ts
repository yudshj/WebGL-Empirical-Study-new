import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://aristino.com/');
  await page.getByRole('button', { name: 'Nhận ngay' }).click();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.locator('#pge_hFJflLUAC').getByText('X', { exact: true }).click();
  await page.locator('section').filter({ hasText: 'Sản phẩm mới NEW Áo sơ mi ngắn tay Aristino ASS240S3 795.000đ NEW Áo polo nam Ar' }).getByRole('button', { name: 'Next slide' }).click();
});