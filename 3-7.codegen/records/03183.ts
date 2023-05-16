import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://www.locandadacondo.it/');
  await page.goto('http://www.locandadacondo.it/360/output/');
});