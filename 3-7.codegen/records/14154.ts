import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://pecasrenault.itavema.com.br/index.aspx#menuVerticalSome');
  await page.goto('https://pecasrenault.itavema.com.br/#menuVerticalSome');
  await page.goto('https://pecasrenault.itavema.com.br/');
  await page.goto('https://pecasrenault.itavema.com.br/#menuVerticalSome');
});