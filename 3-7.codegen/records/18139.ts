import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://vps.gdbrowser.com/');
  await page.getByRole('link', { name: 'Daily Level' }).click();
  await page.locator('#playButton').click();
  await page.locator('#backButton').click();
  await page.getByRole('link', { name: 'GD Private Servers' }).click();
  await page.locator('#searchBox div').filter({ hasText: 'VPS By Vultra' }).getByRole('link').nth(2).click();
});