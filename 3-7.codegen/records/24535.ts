import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.mntge.io/');
  await page.getByRole('listitem').filter({ hasText: 'MNTGE FACTORYMARCH 22ENTER FACTORY' }).getByRole('link', { name: 'ENTER FACTORY' }).click();
  await page.getByRole('button', { name: 'CONNECT WALLET' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
});