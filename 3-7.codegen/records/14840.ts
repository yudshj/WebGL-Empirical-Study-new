import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://quizgame.pixofun.com/');
  await page.goto('https://quizgame.pixofun.com/Game2/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 559,
      y: 497
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 548,
      y: 370
    }
  });
});