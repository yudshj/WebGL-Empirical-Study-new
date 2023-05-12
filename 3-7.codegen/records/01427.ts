import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://naoz.live/');
  await page.getByRole('button', { name: 'Enter the experience' }).click();
});