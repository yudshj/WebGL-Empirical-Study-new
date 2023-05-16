import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.ducklifegame.com/');
  await page.frameLocator('#gameFrame').locator('[id="\\#canvas"]').click({
    position: {
      x: 928,
      y: 610
    }
  });
  await page.frameLocator('#gameFrame').locator('[id="\\#canvas"]').click({
    position: {
      x: 693,
      y: 330
    }
  });
  await page.frameLocator('#gameFrame').locator('[id="\\#canvas"]').click({
    position: {
      x: 693,
      y: 330
    }
  });
  await page.frameLocator('#gameFrame').locator('[id="\\#canvas"]').click({
    clickCount: 3,
    position: {
      x: 693,
      y: 330
    }
  });
  await page.frameLocator('#gameFrame').locator('[id="\\#canvas"]').dblclick({
    position: {
      x: 693,
      y: 330
    }
  });
  await page.frameLocator('#gameFrame').locator('[id="\\#canvas"]').click({
    position: {
      x: 466,
      y: 576
    }
  });
  await page.frameLocator('#gameFrame').locator('[id="\\#canvas"]').click({
    position: {
      x: 501,
      y: 590
    }
  });
});