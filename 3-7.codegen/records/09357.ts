import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://get-great.site/en/');
  await page.getByRole('link', { name: 'Website design & Development', exact: true }).hover();
  await page.getByRole('link', { name: '3D, Graphic design Illustration creation' }).click();
});