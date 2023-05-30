import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://bynwr.com/');
  await page.getByRole('link', { name: 'Play' }).click();
  await page.getByRole('link', { name: '+' }).click();
  await page.getByRole('link', { name: '+' }).click();
});