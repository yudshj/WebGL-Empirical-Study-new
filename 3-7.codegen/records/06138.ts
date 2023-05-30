import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://bstd.ru/');
  await page.locator('canvas').click({
    position: {
      x: 706,
      y: 389
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 493,
      y: 322
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 725,
      y: 342
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 801,
      y: 511
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1066,
      y: 614
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 207,
      y: 400
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 642,
      y: 646
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 744,
      y: 327
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 541,
      y: 451
    }
  });
});