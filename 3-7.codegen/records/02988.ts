import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://immersive-g.com/one-year/');
  await page.getByText('Drag & drop One Year by').click();
  await page.locator('app-secret').first().click();
  await page.locator('app-secret').first().click();
  await page.locator('app-secret').first().click();
  await page.locator('app-secret').first().click();
  await page.locator('app-secret').first().click();
  await page.locator('app-secret').first().click();
});