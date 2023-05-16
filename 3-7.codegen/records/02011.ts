import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://test.nie.163.com/test_html/dhxy/2022/pinpai/ftj/dev/');
});