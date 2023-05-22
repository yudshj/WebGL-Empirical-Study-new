import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://gaia2015.com/vr/');
  await page.getByText('START').click();
  await page.locator('canvas').click({
    position: {
      x: 655,
      y: 175
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 626,
      y: 414
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 728,
      y: 286
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 546,
      y: 204
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 663,
      y: 104
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 656,
      y: 38
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 670,
      y: 56
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 613,
      y: 9
    }
  });
});