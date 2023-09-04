import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://summitmaps.summitoh.net/EnvironmentalViewer2.0/');
  await page.goto('https://summitmaps.summitoh.net/EnvironmentalViewer2.0/');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('checkbox', { name: 'I agree to the above terms and conditions' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Zoom out' }).click();
  await page.locator('#map_layers').click();
});