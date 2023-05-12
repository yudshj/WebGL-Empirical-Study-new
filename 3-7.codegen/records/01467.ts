import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://ninjadash.weareslim.de/?q=low');
  await page.getByRole('button', { name: 'START' }).click();
});