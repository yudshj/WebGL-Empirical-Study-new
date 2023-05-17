import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://alexanderromanovsky.com/');
  await page.getByText('experience', { exact: true }).click();
});