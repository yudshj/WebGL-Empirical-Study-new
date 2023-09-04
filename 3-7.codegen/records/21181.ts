import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.elasun.cn/');
  await page.goto('https://www.elasun.cn/#anchor=home');
  await page.goto('https://www.elasun.cn/#anchor=about');
  await page.goto('https://www.elasun.cn/#anchor=product');
  await page.goto('https://www.elasun.cn/#anchor=strength');
  await page.goto('https://www.elasun.cn/#anchor=news');
});