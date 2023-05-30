import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://constellations.quebec/');
  await page.getByRole('button', { name: 'D é m a r r e r l ’ e x p é r i e n c e' }).click();
  await page.getByRole('button', { name: 'II', exact: true }).click();
  await page.getByRole('button', { name: 'III' }).click();
  await page.getByRole('button', { name: 'IV' }).click();
  await page.getByRole('button', { name: 'V', exact: true }).click();
  await page.getByRole('button', { name: 'VI' }).click();
  await page.locator('.c-home').click();
  await page.getByRole('button', { name: '14 étoiles à découvrir' }).click();
  await page.locator('#neighbourhood-labels-5').getByRole('button', { name: 'Explore L&#039;étranger' }).click();
});