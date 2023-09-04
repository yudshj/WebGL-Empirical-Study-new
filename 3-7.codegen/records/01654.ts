import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://portal.argin.ru/');
  await page.goto('http://portal.argin.ru/view/auth/login.zul;jsessionid=3ABD23EC60B3A03F9FE648AB8A6B0321');
});