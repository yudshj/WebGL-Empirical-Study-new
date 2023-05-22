import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://vr.kissscience.tw/');
  await page.frameLocator('#iframe').locator('#pathItems').getByRole('link').first().click();
  await page.frameLocator('#iframe').locator('div:nth-child(31)').click();
});