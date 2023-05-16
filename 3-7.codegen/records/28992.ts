import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://yourworld.auckland.ac.nz/');
  await page.getByRole('button', { name: 'Let\'s go' }).click();
  await page.getByRole('button', { name: 'I\'d just like to look' }).click();
});