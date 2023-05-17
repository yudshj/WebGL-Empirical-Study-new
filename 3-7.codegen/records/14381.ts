import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://play.daud.io/');
  await page.getByRole('link', { name: 'Party City Multiplayer Battle with other fleets in a wild map with lots of laughs Play Now slow [353ms] players: 0' }).getByRole('button', { name: 'Play Now' }).click();
  await page.getByRole('button', { name: 'Play' }).click();
});