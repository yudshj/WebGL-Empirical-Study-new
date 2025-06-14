import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://gis.bpjt.pu.go.id/');
  await page.goto('https://sigi.pu.go.id/portalpupr/apps/opsdashboard/index.html#/ad691982b770462d8e236f8ca7e450f4');
  await page.goto('https://sigi.pu.go.id/portalpupr/apps/dashboards/index.html#/ad691982b770462d8e236f8ca7e450f4');
  await page.goto('https://sigi.pu.go.id/portalpupr/apps/dashboards/ad691982b770462d8e236f8ca7e450f4');
  await page.locator('button').nth(2).click();
});