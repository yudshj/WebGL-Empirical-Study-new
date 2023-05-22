import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://sidewords.ca/');
  await page.locator('canvas').click({
    position: {
      x: 145,
      y: 283
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 144,
      y: 232
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 235,
      y: 226
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 301,
      y: 221
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 123,
      y: 223
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 59,
      y: 275
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 219,
      y: 207
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 203,
      y: 208
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 167,
      y: 219
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 95,
      y: 226
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 40,
      y: 213
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 297,
      y: 152
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 51,
      y: 427
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 324,
      y: 205
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 23,
      y: 521
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 304,
      y: 80
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 304,
      y: 79
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 263,
      y: 361
    }
  });
});