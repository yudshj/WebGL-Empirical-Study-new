import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://art.tonon.co/');
  await page.getByRole('link', { name: ' 3D' }).click();
  await page.getByRole('img', { name: 'Alien nature' }).click();
});