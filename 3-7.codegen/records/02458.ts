import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.bluedove.co.kr/');
  await page.goto('http://www.bluedove.co.kr/?ckattempt=1');
});