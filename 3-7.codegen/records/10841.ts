import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://jcit.com.tw/popReal.html');
  await page.mouse.move(640, 200);
  await page.mouse.down();
  await page.mouse.move(100, 100);
  await page.mouse.up();
});