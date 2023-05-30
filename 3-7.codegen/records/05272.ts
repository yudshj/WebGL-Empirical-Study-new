import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://ashgabatcity.gov.tm/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Syýahata başlamak' }).click();
  const page1 = await page1Promise;
});