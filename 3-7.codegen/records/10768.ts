import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.cartoonnetworkhq.com/games/ivandoe-quest-on/play');
  await page.getByRole('button', { name: 'Accept' }).click();
  await page.frameLocator('iframe[title="Quest On\\!"]').locator('#pixi-canvas').click({
    position: {
      x: 451,
      y: 452
    }
  });
  await page.frameLocator('iframe[title="Quest On\\!"]').locator('#pixi-canvas').click({
    position: {
      x: 869,
      y: 498
    }
  });
  await page.frameLocator('iframe[title="Quest On\\!"]').locator('#pixi-canvas').click({
    position: {
      x: 848,
      y: 506
    }
  });
  await page.frameLocator('iframe[title="Quest On\\!"]').locator('#pixi-canvas').click({
    position: {
      x: 833,
      y: 507
    }
  });
  await page.frameLocator('iframe[title="Quest On\\!"]').locator('#pixi-canvas').click({
    position: {
      x: 833,
      y: 506
    }
  });
  await page.frameLocator('iframe[title="Quest On\\!"]').locator('#pixi-canvas').click({
    position: {
      x: 322,
      y: 340
    }
  });
  await page.frameLocator('iframe[title="Quest On\\!"]').locator('#pixi-canvas').click({
    position: {
      x: 734,
      y: 261
    }
  });
  await page.frameLocator('iframe[title="Quest On\\!"]').locator('#pixi-canvas').click({
    position: {
      x: 805,
      y: 454
    }
  });
  await page.frameLocator('iframe[title="Quest On\\!"]').locator('#pixi-canvas').dblclick({
    position: {
      x: 810,
      y: 481
    }
  });
});