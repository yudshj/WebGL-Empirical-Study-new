import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://romanjeanelie.com/');
  await page.getByRole('link', { name: 'c l i c k h e r e t o e n t e r' }).click();
  await page.getByRole('main').locator('div').filter({ hasText: '001 Où est Jean-Luc June 2022' }).first().click();
});