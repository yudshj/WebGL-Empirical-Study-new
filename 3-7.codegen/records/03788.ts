import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://sustentabilidade.salvador.ba.gov.br/');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('#myCarousel-indicators').getByRole('listitem').first().click();
  await page.locator('#myCarousel-indicators').getByRole('listitem').nth(1).click();
  await page.locator('#myCarousel-indicators').getByRole('listitem').nth(2).click();
});