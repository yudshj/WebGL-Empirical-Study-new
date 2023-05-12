import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://kpmc.com.tw/');
  await page.locator('div').filter({ hasText: 'Surprise ! Try it ! Find The Easter egg. K M C 滑鼠左鍵 以及點擊鍵盤 任意鍵 可以關閉提示 ※ Cookie 提' }).nth(1).click();
});