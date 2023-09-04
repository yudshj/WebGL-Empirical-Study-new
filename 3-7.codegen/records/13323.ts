import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://newerbio.com.tw/');
  await page.locator('section').filter({ hasText: '遍布牛樟木的香氣林間，我在牛耳莊園 Scroll Down' }).locator('span').click();
});