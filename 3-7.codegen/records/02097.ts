import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.locator('.slide-nav > a:nth-child(3)').click();
  await page.locator('.slide-nav > a:nth-child(4)').click();
  await page.locator('.slide-nav > a:nth-child(5)').click();
  await page.locator('.slide-nav > a:nth-child(6)').click();
  await page.locator('a:nth-child(7)').click();
  await page.locator('a:nth-child(8)').click();
});