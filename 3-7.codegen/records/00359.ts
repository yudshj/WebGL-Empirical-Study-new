import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://byte-trading.com/');
  await page.getByRole('button', { name: 'Enter' }).click();
  await page.locator('.close-icon').click();
  await page.getByText('Discover Byte Street').click();
  await page.locator('.circle').click();
});