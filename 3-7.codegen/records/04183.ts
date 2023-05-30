import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://22unlocked.gdbrowser.com/');
  await page.getByRole('link', { name: 'Featured' }).click();
  await page.getByText('Like a Blast By 3Dash Like a Blast! Medium 17.4K 121 175 Hard 5 #494914').click();
  await page.getByRole('link', { name: 'Like a Blast!' }).click();
  await page.locator('#searchBox div').filter({ hasText: 'Like a Blast By 3Dash Like a Blast! Medium 17.4K 121 175 Hard 5 #494914' }).getByRole('link', { name: 'View level' }).click();
  await page.locator('#playButton').click();
});