import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.stlucie.k12.fl.us/');
  await page.locator('rs-arrow').nth(1).click();
  await page.locator('rs-arrow').nth(1).click();
  await page.locator('rs-arrow').first().click();
  await page.locator('rs-arrow').first().click();
  await page.locator('#slider-165-slide-1168-layer-14').click();
});