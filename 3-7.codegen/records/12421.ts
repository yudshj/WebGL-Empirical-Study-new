import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://matchmaker.merci-michel.com/');
  await page.getByRole('button', { name: 'Profile' }).click();
  await page.getByRole('button', { name: 'Profile' }).nth(2).click();
  await page.getByRole('button', { name: 'Profile' }).first().click();
  await page.getByRole('button', { name: 'Profile' }).first().click();
  await page.getByRole('button', { name: 'Profile' }).nth(2).click();
});