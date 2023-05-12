import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://nebulaz.io/');
  await page.getByPlaceholder('Enter your player name!').click();
  await page.getByPlaceholder('Enter your player name!').fill('123');
  await page.getByRole('link', { name: 'Play!' }).click();
});