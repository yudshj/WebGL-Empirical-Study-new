import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.cieeventosespeciales.com.mx/');
  await page.goto('https://www.cieeventosespeciales.com.mx/#gallery-2');
  await page.goto('https://www.cieeventosespeciales.com.mx/');
});