import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://visitgiglioisland.com/en/giglio-island-official-website/');
  await page.locator('#slider-3-slide-23-layer-28').click();
  await page.locator('#slider-3-slide-24-layer-28').click();
});