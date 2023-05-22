import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://voggle.com/');
  await page.locator('#main').click({
    position: {
      x: 130,
      y: 325
    }
  });
  await page.locator('#main').click({
    position: {
      x: 168,
      y: 357
    }
  });
  await page.locator('#main').click({
    position: {
      x: 282,
      y: 358
    }
  });
  await page.locator('#main').click({
    position: {
      x: 290,
      y: 304
    }
  });
  await page.locator('#main').click({
    position: {
      x: 298,
      y: 422
    }
  });
  await page.locator('#main').click({
    position: {
      x: 167,
      y: 398
    }
  });
  await page.locator('#main').click({
    position: {
      x: 320,
      y: 393
    }
  });
  await page.locator('#main').click({
    position: {
      x: 297,
      y: 264
    }
  });
  await page.locator('#main').click({
    position: {
      x: 140,
      y: 310
    }
  });
  await page.locator('#main').click({
    position: {
      x: 191,
      y: 411
    }
  });
  await page.locator('#main').click({
    position: {
      x: 256,
      y: 498
    }
  });
  await page.locator('#main').click({
    position: {
      x: 331,
      y: 492
    }
  });
  await page.locator('#main').click({
    position: {
      x: 419,
      y: 315
    }
  });
  await page.locator('#main').click({
    position: {
      x: 296,
      y: 406
    }
  });
  await page.locator('#main').click({
    position: {
      x: 295,
      y: 418
    }
  });
  await page.locator('#main').click({
    position: {
      x: 339,
      y: 278
    }
  });
  await page.locator('#main').click({
    position: {
      x: 400,
      y: 317
    }
  });
  await page.locator('#main').click({
    position: {
      x: 295,
      y: 266
    }
  });
  await page.locator('#main').click({
    position: {
      x: 322,
      y: 494
    }
  });
  await page.locator('#main').click({
    position: {
      x: 36,
      y: 256
    }
  });
  await page.locator('#main').click({
    position: {
      x: 62,
      y: 404
    }
  });
  await page.locator('#main').click({
    position: {
      x: 332,
      y: 276
    }
  });
  await page.locator('#main').click({
    position: {
      x: 171,
      y: 418
    }
  });
  await page.locator('#main').click({
    position: {
      x: 436,
      y: 296
    }
  });
  await page.locator('#main').click({
    position: {
      x: 453,
      y: 308
    }
  });
  await page.locator('#main').click({
    position: {
      x: 404,
      y: 282
    }
  });
});