import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.procedural.eu/');
  await page.getByRole('link', { name: 'Demo' }).click();
  await page.getByRole('button', { name: '3D' }).click();
});