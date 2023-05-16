import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://talmat.dk/');
  await page.locator('.fa').first().click();
  await page.getByRole('button', { name: 'Start' }).click();
});