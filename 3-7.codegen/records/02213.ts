import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://wildflower.resn.co.nz/');
  await page.getByRole('button').first().click();
  await page.locator('#js-name-you').fill('foo');
  await page.locator('#js-name-who').fill('bar');
  await page.locator('.pulsatingHeart > svg > use').click();
});