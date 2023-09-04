import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://m.lecai08.com/');
  await page.goto('http://m.lecai08.com/index');
  await page.locator('.notice-content > .van-icon').click();
});