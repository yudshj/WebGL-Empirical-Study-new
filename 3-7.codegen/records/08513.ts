import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://exhibition.samsungbiologics.com/');
  await page.goto('https://exhibition.samsungbiologics.com/#node1');
  await page.getByRole('link', { name: 'Close' }).click();
  await page.locator('div:nth-child(3) > div:nth-child(14) > div').first().click();
});