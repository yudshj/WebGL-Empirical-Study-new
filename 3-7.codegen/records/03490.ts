import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.points-of-view.net/en/');
  await page.getByRole('button', { name: 'Explore' }).click();
  await page.getByText('Jerusalem', { exact: true }).click();
  await page.getByText('Jerusalem', { exact: true }).click();
  await page.locator('.image').click();
  await page.locator('.image').click();
  await page.getByRole('link', { name: '×' }).click();
  await page.locator('div').filter({ hasText: /^×$/ }).click();
  await page.locator('.body > .overlay').click();
  await page.locator('.image').click();
  await page.locator('div').filter({ hasText: /^×$/ }).click();
});