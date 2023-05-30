import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://adventuretimedistantlands.com/');
  await page.locator('div').filter({ hasText: /^Loading$/ }).first().click();
  await page.locator('#Stage').click();
  await page.locator('#Stage').click();
  await page.locator('#Stage').click();
  await page.locator('#Stage').click();
  await page.locator('#Stage').click();
  await page.locator('#Stage').click();
  await page.locator('#Stage').click();
  await page.locator('#Stage').click();
  await page.locator('#Stage').click();
  await page.getByText('Terms of UsePrivacy PolicyClose Video Player').click();
  await page.locator('#Stage').click();
  await page.getByRole('link', { name: 'Close Video Player' }).click();
  await page.locator('#Stage').click();
  await page.locator('#Stage').click();
  await page.locator('#Stage').click();
});