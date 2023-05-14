import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://ring.shapewright.com/');
  await page.locator('#size').click();
  await page.locator('#thickness').getByRole('link').click();
  await page.locator('#width').getByRole('link').click();
  await page.locator('#shape').click();
  await page.locator('#detail').getByRole('link').click();
});