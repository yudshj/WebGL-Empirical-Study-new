import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://okk.dinamika.ac.id/');
  await page.getByRole('link', { name: 'Selengkapnya', exact: true }).click();
});