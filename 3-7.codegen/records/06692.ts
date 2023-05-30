import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://choochooworld.com/');
  await page.goto('https://choochooworld.com/?DATA=DFFBHFIJB/0/D');
  await page.getByRole('button', { name: 'Start Building' }).click();
  await page.getByRole('button', { name: 'Continue Start' }).click();
  await page.locator('#player-playPause-btn').click();
  await page.locator('#player-playPause-btn').click();
  await page.locator('#player-playPause-btn').click();
  await page.locator('#player-playPause-btn').click();
});