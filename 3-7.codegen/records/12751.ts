import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://militaryfamilies.com/tag/entrepreneur/');
  await page.getByRole('link', { name: '2', exact: true }).click();
  await page.getByRole('link', { name: '' }).click();
});