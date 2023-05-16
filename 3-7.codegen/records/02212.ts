import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://wikiverse.io/');
  await page.getByText('Complete250.0005%of Wikipedia').click();
  await page.getByText('START', { exact: true }).click();
});