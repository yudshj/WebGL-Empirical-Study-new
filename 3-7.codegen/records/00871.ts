import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://gloriagroove.com.br/');
  await page.getByRole('button', { name: 'Ative o som' }).click();
});