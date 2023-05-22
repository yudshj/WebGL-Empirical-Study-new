import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://bellottoeric.fr/');
  await page.getByRole('alert', { name: '3D Experience is ready' }).click();
});