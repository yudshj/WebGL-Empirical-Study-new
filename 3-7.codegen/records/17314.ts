import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://tripolystudio.com/');
  await page.locator('.carousel-indicators > li:nth-child(7)').click();
  await page.locator('.carousel-indicators > li:nth-child(8)').click();
  await page.locator('li:nth-child(9)').first().click();
});