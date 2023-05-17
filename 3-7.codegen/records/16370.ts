import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://static.ssl.jimingkeji.com.cn/douyin_carnival_2022/index.html?sceneId=1#/home');
  await page.getByText('点击进入').click();
});