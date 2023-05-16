import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://genki.rauftech.com/');
  await page.getByRole('button', { name: 'E n t e r t h e E x p e r i e n c e' }).click();
});