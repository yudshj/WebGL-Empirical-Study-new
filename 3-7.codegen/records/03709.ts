import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.snehacrackers.com/');
  await page.locator('div').filter({ hasText: 'Sivakasi Direct Factory Outlet & Crackers Show Room, All India Delivery Phone: 9' }).click();
  await page.getByRole('link', { name: 'PRODUCTS', exact: true }).click();
});