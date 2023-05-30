import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://game.nft11.io/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 103,
      y: 385
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 614,
      y: 560
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 604,
      y: 400
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 604,
      y: 400
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 1025,
      y: 79
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 892,
      y: 186
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 744,
      y: 596
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 744,
      y: 596
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 828,
      y: 583
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 828,
      y: 583
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 893,
      y: 412
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 804,
      y: 470
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 1013,
      y: 273
    }
  });
});