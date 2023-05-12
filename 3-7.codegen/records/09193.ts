import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://game.poker-chase.com/play/index.html');
  await page.locator('#unity-canvas').click({
    position: {
      x: 699,
      y: 598
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 597,
      y: 407
    }
  });
  await page.locator('#unity-canvas').dblclick({
    position: {
      x: 624,
      y: 413
    }
  });
  await page.locator('#unity-canvas').dblclick({
    position: {
      x: 668,
      y: 588
    }
  });
  await page.locator('#unity-canvas').dblclick({
    position: {
      x: 640,
      y: 621
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 623,
      y: 603
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 812,
      y: 551
    }
  });
});