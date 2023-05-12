import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.mod-synth.io/');
  await page.locator('canvas').click({
    position: {
      x: 666,
      y: 418
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 642,
      y: 455
    }
  });
  await page.getByText('Skip Tour').click();
  await page.locator('canvas').click({
    position: {
      x: 649,
      y: 355
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 264,
      y: 441
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 303,
      y: 602
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 961,
      y: 204
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 624,
      y: 575
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 619,
      y: 461
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 537,
      y: 563
    }
  });
});