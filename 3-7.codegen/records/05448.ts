import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://awards.inggoodfinds.market/');
  await page.getByRole('button', { name: 'Start exploring' }).click();
});