import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://rework.vitality.gg/');
  await page.getByRole('button', { name: 'Shape' }).first().click();
  await page.getByRole('button', { name: 'Shape' }).first().click();
  await page.getByRole('button', { name: 'Shape' }).nth(1).click();
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('button', { name: 'Shape' }).nth(1).click();
});