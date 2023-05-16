import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://app.unwebs.id/');
  await page.goto('https://app.unwebs.id/#');
});