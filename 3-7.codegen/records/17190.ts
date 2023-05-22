import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.torusland.com/');
  await page.getByRole('button', { name: 'log in' }).click();
  await page.getByRole('button', { name: 'log in' }).click();
  await page.getByRole('button', { name: 'log in' }).click();
  await page.getByRole('button', { name: 'log in' }).click();
  await page.getByRole('button', { name: 'Sign up', exact: true }).click();
  await page.getByRole('button', { name: 'log in' }).click({
    clickCount: 3
  });
  await page.getByRole('button', { name: 'login' }).click({
    clickCount: 3
  });
  await page.getByRole('button', { name: 'log in' }).dblclick();
});