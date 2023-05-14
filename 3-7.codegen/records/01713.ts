import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://radioeight.net/');
  await page.getByRole('link', { name: 'Let\'s begin' }).click();
});