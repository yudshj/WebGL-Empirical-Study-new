import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://application.jouplast.com/');
  await page.goto('https://application.jouplast.com/build/webgl/index_version.html?p=1684225143310');
  await page.goto('https://application.jouplast.com/build/webgl/V0.19/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 604,
      y: 434
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 953,
      y: 387
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 1072,
      y: 635
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 1060,
      y: 616
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 497,
      y: 334
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 641,
      y: 620
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 577,
      y: 339
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 649,
      y: 611
    }
  });
});