import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://tour.uts.edu.au/');
  await page.getByRole('button', { name: 'Okay, I’m ready' }).click();
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.getByRole('button', { name: 'Start tour' }).click();
});