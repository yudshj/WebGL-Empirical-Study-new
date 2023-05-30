import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://timi.unity.com/');
  await page.getByRole('button', { name: 'Explore' }).click();
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.locator('#unity-canvas').click({
    position: {
      x: 637,
      y: 316
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 614,
      y: 356
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 594,
      y: 400
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 412,
      y: 432
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 546,
      y: 445
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 991,
      y: 397
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 1053,
      y: 291
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 438,
      y: 407
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 699,
      y: 396
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 641,
      y: 408
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 500,
      y: 191
    }
  });
});