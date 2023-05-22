import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://github.3dstreet.org/');
  await page.locator('canvas').click({
    position: {
      x: 526,
      y: 423
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 526,
      y: 423
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 738,
      y: 388
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 448,
      y: 382
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 782,
      y: 397
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 588,
      y: 375
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 904,
      y: 386
    }
  });
  await page.getByRole('button', { name: '3DStreet Viewer' }).click();
});