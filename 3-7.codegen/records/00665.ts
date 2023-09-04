import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://elpato-restaurant.com/');
  await page.frameLocator('iframe').locator('.ggskin > div:nth-child(8)').click();
  await page.getByRole('link', { name: 'Next slide' }).first().click();
  await page.getByRole('link', { name: 'Next slide' }).first().click();
  await page.locator('#segundo').getByRole('link', { name: 'Previous slide' }).click();
  await page.locator('#segundo').getByRole('link', { name: 'Previous slide' }).click();
});