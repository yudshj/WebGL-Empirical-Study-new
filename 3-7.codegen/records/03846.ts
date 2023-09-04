import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.tooltech.net/');
  await page.frameLocator('iframe').locator('li > a').first().click();
  await page.frameLocator('iframe').locator('li:nth-child(2) > a').click();
  await page.frameLocator('iframe').locator('li:nth-child(3) > a').click();
  await page.frameLocator('iframe').locator('li:nth-child(4) > a').click();
  await page.frameLocator('iframe').locator('li:nth-child(5) > a').click();
  await page.frameLocator('iframe').locator('li:nth-child(6) > a').click();
});