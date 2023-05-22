import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://game.behemoth.pl/');
  await page.getByRole('button', { name: 'Spotify connect Spotify connect' }).click();
});