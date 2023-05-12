import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://dungeon-generator.fantasy-calendar.com/');
  await page.locator('canvas').click({
    position: {
      x: 651,
      y: 342
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 651,
      y: 342
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 661,
      y: 358
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 794,
      y: 346
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 794,
      y: 346
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 794,
      y: 346
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 735,
      y: 209
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 620,
      y: 161
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 633,
      y: 206
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 632,
      y: 319
    }
  });
  await page.locator('canvas').dblclick({
    position: {
      x: 632,
      y: 319
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 523,
      y: 331
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 628,
      y: 355
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 649,
      y: 303
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 373,
      y: 75
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 374,
      y: 139
    }
  });
});