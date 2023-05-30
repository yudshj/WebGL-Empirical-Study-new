import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.ultranoir.com/en/');
  await page.getByText('ultranoir').nth(1).click();
});