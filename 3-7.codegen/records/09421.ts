import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://gis-dougco.opendata.arcgis.com/datasets/parcels-w-accounts');
  await page.goto('https://gis-dougco.opendata.arcgis.com/404');
});