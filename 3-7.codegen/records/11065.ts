import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://kaleidozdesign.com/');
  await page.getByRole('complementary').click();
  await page.getByRole('complementary').click();
  await page.getByRole('complementary').click();
  await page.getByRole('complementary').click();
  await page.getByRole('complementary').click();
  await page.locator('div').filter({ hasText: /^Drag and drop this cube to navigate$/ }).getByRole('img').click();
  await page.getByRole('complementary').click();
  await page.getByRole('complementary').click();
  await page.getByRole('complementary').click();
  await page.getByRole('complementary').click();
  await page.locator('#content').getByRole('img').first().click();
});