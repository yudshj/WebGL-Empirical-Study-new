import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://lukasz-macon.com/four_seasons/');
  await page.getByText('ON', { exact: true }).click();
  await page.locator('canvas').click({
    position: {
      x: 787,
      y: 176
    }
  });
});