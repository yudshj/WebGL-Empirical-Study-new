import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://byggmodul.talgo.no/app');
  await page.getByText('Start', { exact: true }).click();
  await page.locator('#yui_3_18_1_1_1684248188736_968').click();
  await page.locator('#yui_3_18_1_1_1684248188736_1013').click();
  await page.locator('#yui_3_18_1_1_1684248188736_1190').click();
});