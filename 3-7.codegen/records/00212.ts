import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://aurorasunnyislesbeach.com/');
  await page.locator('#Contents a').first().click();
  await page.locator('#Contents a').nth(1).click();
});