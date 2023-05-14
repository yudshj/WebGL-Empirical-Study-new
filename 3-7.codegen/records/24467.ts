import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.mindandmakr.com/');
  await page.getByRole('link', { name: 'Enter' }).click();
  await page.locator('header').getByRole('link').first().click();
});