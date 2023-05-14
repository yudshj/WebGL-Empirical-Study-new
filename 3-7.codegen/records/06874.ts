import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://cloud.withgoogle.com/intel/');
  await page.getByRole('button', { name: 'Click to Close' }).click();
  await page.getByRole('button', { name: 'Click to play' }).click();
  await page.getByRole('button', { name: 'S k i p V i d e o' }).click();
  await page.getByText('Moon', { exact: true }).nth(1).click();
  await page.getByRole('button', { name: 'Click to play' }).click();
  await page.getByRole('button', { name: 'skip' }).click();
  await page.getByText('Earth', { exact: true }).nth(1).click();
  await page.getByRole('button', { name: 'Click to play' }).click();
});