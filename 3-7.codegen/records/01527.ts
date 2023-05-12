import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://online.beatthebomb.com/');
  await page.goto('http://online.beatthebomb.com/mission-01/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 886,
      y: 368
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 840,
      y: 487
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 863,
      y: 382
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 969,
      y: 498
    }
  });
  await page.locator('#unity-canvas').dblclick({
    position: {
      x: 968,
      y: 501
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 700,
      y: 383
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 950,
      y: 386
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 947,
      y: 476
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 523,
      y: 293
    }
  });
});