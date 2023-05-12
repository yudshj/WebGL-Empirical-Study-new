import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.justareflektor.com/');
  await page.getByRole('button', { name: 'Start' }).click();
  await page.locator('.code').first().click();
});