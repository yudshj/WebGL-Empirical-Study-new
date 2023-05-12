import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://ev.io/');
  await page.getByRole('button', { name: '[ SPECTATE ]' }).click();
});