import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://cinekidplay.nl/overzicht');
  await page.getByRole('button', { name: 'Kijk hier!' }).click();
});