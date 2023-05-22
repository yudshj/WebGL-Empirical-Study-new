import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://endlessletter.com/en/');
  await page.getByRole('button', { name: 'Launch Experience 1941' }).click();
  await page.getByRole('button', { name: 'skip' }).click();
  await page.getByRole('button', { name: 'Read letter. F. Darensky. 1941' }).click();
  await page.getByRole('button', { name: 'Close popup' }).click();
  await page.getByRole('button', { name: 'Read letter. I. Kolosov. 1941' }).click();
  await page.getByRole('button', { name: 'Close popup' }).click();
  await page.getByRole('button', { name: 'Read letter. N. Piven. 1941' }).click();
  await page.getByRole('button', { name: 'Close popup' }).click();
  await page.getByRole('button', { name: 'Read letter. G. Sorokin. 1941' }).click();
  await page.getByRole('button', { name: 'Close popup' }).click();
});