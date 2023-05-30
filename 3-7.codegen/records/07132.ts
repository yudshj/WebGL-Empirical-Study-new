import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://corvus.third-dimension.studio/');
  await page.getByRole('button', { name: 'click to continue' }).click();
  await page.locator('div').filter({ hasText: /^002$/ }).click();
  await page.locator('div').filter({ hasText: /^003$/ }).click();
  await page.locator('div').filter({ hasText: /^004$/ }).click();
  await page.locator('div').filter({ hasText: /^004$/ }).click();
  await page.locator('div').filter({ hasText: /^005$/ }).click();
});