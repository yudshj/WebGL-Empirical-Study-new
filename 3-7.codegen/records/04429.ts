import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://actu-al.co/');
  await page.getByRole('link', { name: '– English' }).click();
});