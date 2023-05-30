import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://petz.lol/');
  await page.goto('https://petz.lol/#026ef045-e829-4a6a-b08e-0830ab9fcae6?usw');
  await page.locator('#unity-canvas').click({
    position: {
      x: 631,
      y: 479
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 697,
      y: 293
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 666,
      y: 492
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 666,
      y: 492
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 666,
      y: 492
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 666,
      y: 492
    }
  });
  await page.mouse.move(100, 100);
  await page.keyboard.press('w');
});