import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://riches-of-egypt.gettagaming.com/');
  await page.getByRole('button', { name: 'PLAY' }).click();
  await page.locator('canvas').click({
    position: {
      x: 1195,
      y: 350
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1165,
      y: 362
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1162,
      y: 375
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1162,
      y: 402
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 1165,
      y: 360
    }
  });
});