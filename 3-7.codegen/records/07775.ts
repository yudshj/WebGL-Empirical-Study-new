import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://discovery360.taipei/');
  await page.locator('map').nth(2).click();
  await page.locator('img:nth-child(2)').first().click();
});