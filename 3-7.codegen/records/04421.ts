import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://across-multiverse.com/');
  await page.getByRole('link', { name: 'DISCOVERY MODE' }).click();
  await page.getByRole('link', { name: 'LAUNCH' }).click();
});