import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://19gdps.gdbrowser.com/');
  await page.getByRole('link', { name: 'Map Packs' }).click();
  await page.getByRole('link', { name: 'Ocean Pack 2Stars 1Secret Coins' }).click();
  await page.locator('#searchBox div').filter({ hasText: 'Idibus Martiis By Carminius The last flight Long 10K 1.2K Easy 2 #28308' }).getByRole('link', { name: 'View level' }).click();
  await page.locator('#playButton').click();
});