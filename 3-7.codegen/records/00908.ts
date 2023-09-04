import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://gz.news.cn/ztpd/zggjdsjcyblh_2022/index.htm');
  await page.locator('.swiper-button-next').click();
});