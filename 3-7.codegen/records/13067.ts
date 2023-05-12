import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://museumofpinkart.org/');
  await page.getByText('Enter exhibition →ENGLISH').click();
  await page.getByText('Click to start / Klicke zum Beginnen').click();
});