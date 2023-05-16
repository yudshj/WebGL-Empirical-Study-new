import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://2018.14islands.com/');
  await page.locator('div').filter({ hasText: 'Start' }).nth(2).click();
});