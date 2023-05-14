import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://www.cocobongo.tv/fallen_angel_10/');
  await page.locator('#enter').click();
});