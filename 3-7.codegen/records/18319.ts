import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://webdemo.avatarsdk.com/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 650,
      y: 130
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 325,
      y: 576
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 398,
      y: 366
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 930,
      y: 44
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 933,
      y: 102
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 931,
      y: 104
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 590,
      y: 378
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 509,
      y: 174
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 451,
      y: 139
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 462,
      y: 223
    }
  });
  await page.locator('#unity-canvas').dblclick({
    position: {
      x: 462,
      y: 223
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 563,
      y: 264
    }
  });
  await page.locator('#unity-canvas').dblclick({
    position: {
      x: 429,
      y: 305
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 429,
      y: 305
    }
  });
});