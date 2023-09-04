import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://map.harvard.edu/');
  await page.goto('https://mapprod.cadm.harvard.edu/portal/apps/indoors/index.html?appid=2c3969f8d1b14147920610a68f6db713#?n=1687765775007');
  await page.getByRole('application', { name: 'Map area' }).click();
});