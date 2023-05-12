import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://blackrainbow.la/hope/');
  await page.locator('#Layer_1').click();
  await page.locator('#Layer_1').click();
});