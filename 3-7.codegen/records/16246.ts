import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.alloprof.qc.ca/jeux/spellers/');
  await page.locator('#canvas').click({
    position: {
      x: 498,
      y: 529
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 627,
      y: 617
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 533,
      y: 336
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 673,
      y: 605
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 390,
      y: 375
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 692,
      y: 620
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 642,
      y: 431
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 984,
      y: 562
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 415,
      y: 283
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 911,
      y: 525
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 383,
      y: 287
    }
  });
  await page.locator('#canvas').dblclick({
    position: {
      x: 410,
      y: 316
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 385,
      y: 279
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 430,
      y: 280
    }
  });
});