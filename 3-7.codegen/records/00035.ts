import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://360.thanhlongbay.vn/');
  await page.locator('div').filter({ hasText: 'Thay Đổi Góc NhìnPhóng To - Thu NhỏClick để tham quan dự án' }).nth(3).click();
});