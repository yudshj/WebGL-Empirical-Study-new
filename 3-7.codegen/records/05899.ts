import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://blox-server.herokuapp.com/');
  await page.locator('#canvas').click({
    position: {
      x: 175,
      y: 194
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 253,
      y: 182
    }
  });
  await page.locator('#queue-canvas').click({
    position: {
      x: 38,
      y: 231
    }
  });
  await page.locator('#queue-canvas').click({
    position: {
      x: 42,
      y: 187
    }
  });
  await page.locator('#queue-canvas').click({
    position: {
      x: 52,
      y: 158
    }
  });
  await page.locator('#queue-canvas').click({
    position: {
      x: 41,
      y: 251
    }
  });
  await page.locator('#queue-canvas').click({
    position: {
      x: 49,
      y: 384
    }
  });
  await page.locator('#queue-canvas').click({
    position: {
      x: 71,
      y: 451
    }
  });
});