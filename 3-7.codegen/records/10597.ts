import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://insurrection.photo/');
  await page.getByRole('button', { name: 'DISCOVER INSURRECTION' }).click();
});