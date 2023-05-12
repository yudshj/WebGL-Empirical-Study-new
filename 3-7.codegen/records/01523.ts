import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://onelastbeat.com/');
  await page.locator('div').filter({ hasText: /^START$/ }).nth(3).click();
});