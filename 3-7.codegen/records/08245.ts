import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://en.manayerbamate.com/');
  await page.locator('div:nth-child(6)').first().click();
  await page.locator('div:nth-child(6)').first().click();
});