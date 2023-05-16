import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.tributetobeau.com/');
  await page.getByRole('button', { name: 'enter' }).click();
  await page.getByRole('button', { name: 'click' }).click();
  await page.getByRole('button', { name: 'click' }).click();
  await page.getByRole('button', { name: 'click' }).click();
  await page.getByRole('button', { name: 'click' }).click();
});