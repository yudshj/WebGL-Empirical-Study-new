import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.3drotterdam.nl/');
  await page.goto('https://www.3drotterdam.nl/#/');
  await page.getByRole('button', { name: 'Naar de 3D viewer' }).click();
});