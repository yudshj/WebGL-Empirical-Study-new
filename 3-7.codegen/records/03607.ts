import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.samfordacademy.org/');
  await page.getByRole('button', { name: 'Close X' }).click();
  await page.locator('.amazingslider-nav-1').click();
});