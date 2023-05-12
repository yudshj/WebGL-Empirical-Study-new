import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://gunbox.io/');
  await page.locator('#nick').click();
  await page.locator('#nick').click();
  await page.locator('#nick').fill('123');
  await page.getByRole('button', { name: 'Play as guest' }).click();
});