import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://advent.zamnesia.com/');
  await page.locator('.fixed > .fixed').click();
  await page.locator('div').filter({ hasText: /^—Tap to startClick to start—$/ }).nth(1).click();
  await page.locator('div').filter({ hasText: /^—Tap to startClick to start—$/ }).first().click();
});