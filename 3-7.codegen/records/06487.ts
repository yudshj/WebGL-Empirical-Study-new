import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://ccspark2.careercruising.com/');
  await page.getByLabel('username:').click();
  await page.getByLabel('username:').fill('8888');
  await page.getByLabel('password:').click();
  await page.getByLabel('password:').fill('8888');
  await page.getByRole('button', { name: 'Play' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});