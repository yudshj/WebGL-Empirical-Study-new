import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://arrasnorte.com/');
  await page.locator('.owl-next').first().click();
  await page.locator('.owl-next').first().click();
  await page.locator('#locationMap').getByRole('button', { name: 'Zoom in' }).click();
});