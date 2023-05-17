import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.1948.site/');
  await page.getByText('ר', { exact: true }).click();
  await page.getByText('ז', { exact: true }).click();
});