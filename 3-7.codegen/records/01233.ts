import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://lostcities.org/');
  await page.getByText('Begin').click();
  await page.getByText('Continue').click();
});