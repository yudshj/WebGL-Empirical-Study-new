import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://popcorntv.fr/');
  await page.getByRole('button', { name: 'EN' }).click();
});