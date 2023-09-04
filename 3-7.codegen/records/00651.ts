import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://edenurbano.com/');
  await page.locator('div:nth-child(6) > span').click();
  await page.locator('#locationMap').getByRole('button', { name: 'Zoom in' }).click();
  await page.locator('#mapcontrol').getByRole('button', { name: 'Zoom in' }).click();
  await page.locator('#interior-gallery > div:nth-child(3)').click();
});