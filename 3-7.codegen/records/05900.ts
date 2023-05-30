import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://blox.askplays.com/');
  await page.locator('#canvas').click({
    position: {
      x: 152,
      y: 98
    }
  });
  await page.getByText('Skip To Game Play Multiplayer Singleplayer Custom Opener Other Leaderboards Map ').press('ArrowLeft');
});