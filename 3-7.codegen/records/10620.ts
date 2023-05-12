import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://interweaveagency.com/');
  await page.locator('canvas').click({
    position: {
      x: 659,
      y: 462
    }
  });
  await page.getByText('HOLD TO CHANGE').click();
  await page.getByText('HOLD TO CHANGE').click();
  await page.locator('#cookie-consent-banner').getByText('accept', { exact: true }).click();
});