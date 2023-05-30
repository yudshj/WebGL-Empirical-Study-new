import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://quaternions.online/');
  await page.getByRole('button', { name: 'Apply Rotation' }).first().click();
  await page.getByRole('button', { name: 'Apply Rotation' }).nth(1).click();
  await page.getByRole('button', { name: 'Apply Rotation' }).first().click();
  await page.getByText('Animation').click();
});