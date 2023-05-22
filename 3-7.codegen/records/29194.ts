import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://zombiedash.gdbrowser.com/');
  await page.getByRole('link', { name: 'Daily Level' }).click();
  await page.locator('#playButton').click();
  await page.locator('#backButton').click();
  await page.getByRole('link', { name: 'Weekly Demon' }).click();
  await page.locator('#playButton').click();
});