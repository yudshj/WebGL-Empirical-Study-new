import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://windhub.com/');
  await page.getByRole('button', { name: 'Zoom in' }).click();
  await page.getByRole('button', { name: 'Zoom out' }).click();
  await page.locator('#mapwm43361453873615363').click();
  await page.locator('.windy-map-2__play').click();
  await page.getByRole('link', { name: '×' }).click();
  await page.locator('.windy-map-2__hours-container > div:nth-child(13)').click();
  await page.locator('.leaflet-marker-icon').first().click();
  await page.getByRole('link', { name: '×' }).click();
});