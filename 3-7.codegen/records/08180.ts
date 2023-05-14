import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://ella-home.com/virtual_showroom/');
  await page.locator('div').nth(2).click();
});