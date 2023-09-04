import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://map-viewer-plus.app.landgate.wa.gov.au/');
  await page.getByRole('checkbox', { name: 'I agree to the above Privacy, Copyright and Disclaimer statements' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Zoom in' }).click();
  await page.getByRole('button', { name: 'Zoom in' }).click();
});