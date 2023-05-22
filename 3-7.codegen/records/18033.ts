import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://vistainmuebles.com/propiedades/apartamento-en-venta-152m2-colinas-de-la-tahona/');
  await page.frameLocator('#main-wrap iframe >> nth=0').locator('canvas').click({
    position: {
      x: 495,
      y: 207
    }
  });
  await page.frameLocator('#main-wrap iframe >> nth=0').locator('canvas').click({
    position: {
      x: 794,
      y: 235
    }
  });
  await page.frameLocator('#main-wrap iframe >> nth=0').locator('canvas').click({
    position: {
      x: 755,
      y: 276
    }
  });
  await page.frameLocator('#main-wrap iframe >> nth=0').locator('canvas').click({
    position: {
      x: 910,
      y: 273
    }
  });
  await page.frameLocator('#main-wrap iframe >> nth=0').locator('canvas').click({
    position: {
      x: 469,
      y: 273
    }
  });
});