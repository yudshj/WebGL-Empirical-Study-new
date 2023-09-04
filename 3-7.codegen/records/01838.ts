import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://sentdex.com/geographical-analysis/');
  await page.locator('canvas').click({
    position: {
      x: 506,
      y: 277
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 526,
      y: 336
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 376,
      y: 322
    }
  });
  await page.locator('canvas').click({
    button: 'right',
    position: {
      x: 630,
      y: 279
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 532,
      y: 191
    }
  });
});