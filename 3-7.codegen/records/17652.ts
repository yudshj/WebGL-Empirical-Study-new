import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://unmondeparaules.webapp.itbook.es/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 243,
      y: 211
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 278,
      y: 294
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 558,
      y: 396
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 1046,
      y: 422
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 814,
      y: 494
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 674,
      y: 485
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 142,
      y: 583
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 278,
      y: 238
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 358,
      y: 214
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 116,
      y: 275
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 157,
      y: 404
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 658,
      y: 170
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 638,
      y: 227
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 838,
      y: 270
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 976,
      y: 222
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 1034,
      y: 174
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 1049,
      y: 175
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 738,
      y: 94
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 545,
      y: 114
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 833,
      y: 258
    }
  });

});