import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://play.friendlypixel.com/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 686,
      y: 563
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 676,
      y: 465
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 673,
      y: 286
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 569,
      y: 285
    }
  });
  await page.locator('body').press('ArrowUp');
  await page.locator('body').press('ArrowRight');
  await page.locator('body').press('ArrowRight');
  await page.locator('#unity-canvas').click({
    position: {
      x: 564,
      y: 332
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 596,
      y: 378
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 612,
      y: 421
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 648,
      y: 489
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 632,
      y: 240
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 652,
      y: 602
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 544,
      y: 410
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 495,
      y: 553
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 468,
      y: 686
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 67,
      y: 51
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 426,
      y: 418
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 487,
      y: 514
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 840,
      y: 128
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 844,
      y: 147
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 827,
      y: 150
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 862,
      y: 136
    }
  });
});