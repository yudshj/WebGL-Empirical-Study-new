import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://msp.cbkdz.eu/');
  await page.getByText('Understand').click();
  await page.getByRole('button', { name: 'Close' }).click();
});