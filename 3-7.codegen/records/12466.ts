import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://maxmara-bearinggifts.betteringbrands.com/');
  await page.getByRole('link', { name: 'Start the experience' }).click();
  await page.getByText('Welcome to the #MaxMaraBearingGifts Factory. Follow #MaxTheTeddy100%Hi! Please S').click();
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
});