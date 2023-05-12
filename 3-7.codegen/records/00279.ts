import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://beeplegenerator.com/');
  await page.getByText('Render Beeple').click();
  await page.getByText('Close Render').click();
  await page.getByText('New Beeple').click();
  await page.getByText('New Beeple').click();
});