import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://metashare.maps.vic.gov.au/geonetwork/srv/eng/catalog.search;jsessionid=9EEAAFDEEE7E2D566A3B4323740A39B6');
  await page.goto('https://metashare.maps.vic.gov.au/geonetwork/srv/eng/catalog.search;jsessionid=9EEAAFDEEE7E2D566A3B4323740A39B6#/home');
});