import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://jadsejadson.com.br/');
  await page.getByRole('button', { name: 'Ative o som' }).click();
});