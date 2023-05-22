import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.skylinefilms.tv/');
  await page.locator('#no-click').click();
  await page.locator('#no-click').click();
  await page.locator('#no-click').click();
});