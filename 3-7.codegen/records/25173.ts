import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.onemap3d.gov.sg/');
  await page.goto('https://www.onemap3d.gov.sg/main/');
});