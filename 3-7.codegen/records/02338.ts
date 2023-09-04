import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.ambrosinonapoli.it/');
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('.owl-dots > div:nth-child(4)').click();
  await page.locator('.owl-dots > div:nth-child(3)').click();
});