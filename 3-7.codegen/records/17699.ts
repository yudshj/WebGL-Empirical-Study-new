import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://urlaub-am-staffelsee.de/');
  await page.locator('rs-arrow').nth(1).click();
  await page.locator('rs-arrow').nth(1).click();
  await page.locator('rs-arrow').nth(1).click();
});