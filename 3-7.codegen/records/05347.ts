import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://atlasdespeuplesautochtonesducanada.ca/section/la-commission-de-verite-et-reconciliation/');
  await page.getByRole('button', { name: 'Image suivante' }).click();
});