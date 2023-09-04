import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://geonetwork.napr.gov.ge/geonetwork/srv/geo/catalog.search;jsessionid=18074B0E935C9F9E225414B3E7771262');
  await page.goto('http://geonetwork.napr.gov.ge/geonetwork/srv/geo/catalog.search;jsessionid=18074B0E935C9F9E225414B3E7771262#/home');
});