import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://gamechange.rnz.co.nz/');
  await page.getByText('The dual lives of one of our most successful video gamers').click();
  await page.getByRole('link', { name: 'Help Loriipops through her day' }).click();
  await page.locator('#video').click();
  await page.getByRole('img').nth(2).click();
  await page.locator('.control').first().click();
  await page.locator('#Rectangle-16').click();
  await page.locator('#logo').click();
  await page.getByText('The dual lives of one of our most successful video gamers').click();
  await page.getByRole('link', { name: 'Help Loriipops through her day' }).click();
  await page.locator('.control').first().click();
  await page.locator('#logo').click();
});