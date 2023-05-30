import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://superhex.io/');
  await page.goto('https://superhex.io/');
  await page.getByPlaceholder('USERNAME').click();
  await page.getByPlaceholder('USERNAME').fill('cfsdf');
  await page.getByRole('button', { name: 'Play', exact: true }).click();
});