import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.xmasearth.com/');
  await page.getByText('A', { exact: true }).click();
  await page.getByText('E', { exact: true }).first().click();
});