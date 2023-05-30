import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://hirbodclinic.com/');
  await page.frameLocator('#hirbod_big_fat_slider').getByRole('img').first().click();
  await page.getByRole('button', { name: 'Close' }).click();
});