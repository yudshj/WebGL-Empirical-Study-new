import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://lamp.sla.ny.gov/');
  await page.getByRole('button', { name: 'OK' }).click();
});