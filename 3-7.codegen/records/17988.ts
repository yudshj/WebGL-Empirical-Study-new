import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://virtualself.co/');
  await page.locator('canvas').click({
    position: {
      x: 650,
      y: 396
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 636,
      y: 362
    }
  });
  await page.locator('.hit').click();
  await page.locator('canvas').click({
    position: {
      x: 658,
      y: 526
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 290,
      y: 210
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 298,
      y: 206
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 646,
      y: 630
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 647,
      y: 638
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 637,
      y: 637
    }
  });
});