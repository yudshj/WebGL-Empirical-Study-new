import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://mhfaengland.kokodigital.co.uk/');
  await page.frameLocator('#gameframe').locator('body').click();
  await page.frameLocator('#gameframe').locator('body').click();
  await page.frameLocator('#gameframe').locator('body').click();
  await page.frameLocator('#gameframe').locator('body').click();
  await page.frameLocator('#gameframe').locator('body').click();
  await page.frameLocator('#gameframe').locator('body').click();
  await page.frameLocator('#gameframe').locator('body').click();
  await page.frameLocator('#gameframe').locator('body').click();
});