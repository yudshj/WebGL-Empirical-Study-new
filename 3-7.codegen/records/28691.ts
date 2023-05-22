import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.yorescape.com/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 661,
      y: 690
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 622,
      y: 677
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 854,
      y: 86
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 563,
      y: 446
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 555,
      y: 237
    }
  });
  await page.keyboard.type('aaa@aaa.com');
  await page.locator('#unity-canvas').click({
    position: {
      x: 541,
      y: 287
    }
  });
  await page.keyboard.type('123456');
  await page.locator('#unity-canvas').click({
    position: {
      x: 643,
      y: 692
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 120,
      y: 353
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 621,
      y: 271
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 662,
      y: 406
    }
  });
});