import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://robtopgames.gdbrowser.com/');
  await page.getByRole('link', { name: 'Gauntlets' }).click();
  await page.getByRole('link', { name: 'Fire Gauntlet' }).click();
  await page.getByTitle('THANK YOU SO MUCH ROBTOP!! Even tho this level is probably my worst XD').getByRole('link', { name: 'View level' }).click();
  await page.locator('#playButton').click();
});