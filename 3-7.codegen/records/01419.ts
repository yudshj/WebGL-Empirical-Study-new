import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://mythomagic.herokuapp.com/');
  await page.frameLocator('iframe').getByText('Mythomagic Online has moved to mythogame.com. the game is no longer actively mai').click();
  const page1Promise = page.waitForEvent('popup');
  await page.frameLocator('iframe').getByRole('link', { name: 'mythogame.com' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: 'play game' }).click();
});