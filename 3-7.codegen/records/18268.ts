import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://wbd.com/');
  await page.locator('section').filter({ hasText: 'Our Company Warner Bros. Discovery, a premier global media and entertainment com' }).click();
  await page.locator('div').filter({ hasText: 'Latest News View All News prevnextslide 1 to 3 of 26 Warner Bros. Discovery Anno' }).getByRole('button', { name: 'next' }).click();
  await page.locator('#spotlight').getByRole('button', { name: 'next' }).click();
  await page.locator('#spotlight').getByRole('button', { name: 'next' }).click();
  await page.locator('#spotlight').getByRole('button', { name: 'prev' }).click();
});