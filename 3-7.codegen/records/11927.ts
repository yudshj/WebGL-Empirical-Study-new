import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://louannewardmatchmaking.com.au/');
  await page.locator('rs-arrow').nth(1).click();
});