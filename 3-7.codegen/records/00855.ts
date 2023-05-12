import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://gigarama.ru/holyfire/');
  await page.locator('div').filter({ hasText: /^ENGLISH$/ }).first().click();
});