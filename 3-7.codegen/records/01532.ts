import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://opencontinents.com/?stars=1');
  await page.locator('#story').click();
  await page.locator('#main').click();
});