import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.oddboy.nz/');
  await page.getByRole('link', { name: 'TAKE ME TO MIGHTY EYES' }).click();
  await page.locator('.div-block-136').click();
});