import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://benedictusgeby.com/');
  await page.locator('#startWebsite').getByRole('link').click();
});