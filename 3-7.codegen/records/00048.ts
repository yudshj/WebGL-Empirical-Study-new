import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://4amworldwide.com/');
  await page.getByRole('link', { name: '' }).click();
  await page.locator('#awards_slider').getByRole('button').nth(1).click();
});