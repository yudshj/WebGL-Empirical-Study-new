import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.kgc.co.kr/index.do#');
  await page.locator('.lab-right-back').click();
});