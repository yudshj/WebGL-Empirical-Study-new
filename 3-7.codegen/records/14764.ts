import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://pvp.qq.com/act/6749/a20210927pf/index.html');
  await page.locator('.tone').click();
});