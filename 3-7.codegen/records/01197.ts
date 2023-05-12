import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://liferestart.syaro.io/view/');
  await page.goto('https://liferestart.syaro.io/public/index.html');
  await page.locator('#layaCanvas').click({
    position: {
      x: 267,
      y: 538
    }
  });
  await page.locator('#layaCanvas').click({
    position: {
      x: 276,
      y: 234
    }
  });
  await page.locator('#layaCanvas').click({
    position: {
      x: 303,
      y: 370
    }
  });
  await page.locator('#layaCanvas').click({
    position: {
      x: 294,
      y: 78
    }
  });
  await page.locator('#layaCanvas').click({
    position: {
      x: 295,
      y: 113
    }
  });
  await page.locator('#layaCanvas').click({
    position: {
      x: 285,
      y: 139
    }
  });
  await page.locator('#layaCanvas').click({
    position: {
      x: 311,
      y: 685
    }
  });
  await page.locator('#layaCanvas').click({
    position: {
      x: 338,
      y: 669
    }
  });
  await page.locator('#layaCanvas').click({
    clickCount: 10,
    position: {
      x: 484,
      y: 151
    }
  });
  await page.locator('#layaCanvas').click({
    clickCount: 9,
    position: {
      x: 498,
      y: 215
    }
  });
  await page.locator('#layaCanvas').click({
    position: {
      x: 357,
      y: 673
    }
  });
  await page.locator('#layaCanvas').click({
    clickCount: 4,
    position: {
      x: 336,
      y: 414
    }
  });
});