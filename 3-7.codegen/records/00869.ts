import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://globe.cid.harvard.edu/');
  await page.locator('#beginExplore').getByRole('img').click();
});