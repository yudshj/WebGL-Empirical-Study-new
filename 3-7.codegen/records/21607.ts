import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://fifpro.org/en/fifpro-pioneers');
  await page.getByRole('button', { name: 'Enter the FIFPRO gallery' }).click();
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.getByRole('button', { name: 'Enter the FIFPRO gallery' }).click();
});