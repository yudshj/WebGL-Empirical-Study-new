import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://experience.mausoleodiaugusto.it/it/');
  await page.goto('http://experience.mausoleodiaugusto.it/it/intro');
  await page.getByRole('link', { name: 'Inizia l\' esperienza' }).click();
});