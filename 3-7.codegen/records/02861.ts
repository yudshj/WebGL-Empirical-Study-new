import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://cartelle.nl/giraffaconda/');
  await page.getByRole('heading', { name: 'START GAME' }).click();
  await page.locator('#game-canvas canvas').click({
    position: {
      x: 603,
      y: 406
    }
  });
  await page.locator('#game-canvas canvas').click({
    position: {
      x: 594,
      y: 490
    }
  });
  await page.locator('#game-canvas canvas').dblclick({
    position: {
      x: 575,
      y: 510
    }
  });
  await page.locator('#game-canvas canvas').click({
    position: {
      x: 545,
      y: 523
    }
  });
});