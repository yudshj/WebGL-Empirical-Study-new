import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.sbs.com.au/theboat/');
  await page.locator('#preloader-container div').nth(3).click();
});