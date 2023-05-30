import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://pendereckisgarden.pl/en');
  await page.getByRole('button', { name: 'Enter' }).click();
  await page.getByRole('link', { name: 'The Maestro’s Manor' }).click();
  await page.getByRole('button', { name: 'Accept privacy policy' }).click();
});