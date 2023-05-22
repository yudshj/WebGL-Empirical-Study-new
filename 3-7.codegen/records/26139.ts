import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://renderpub.com/');
  await page.goto('https://renderpub.com/#Showcase');
  await page.goto('https://renderpub.com/spaces/TestUser/sammys');
  await page.locator('canvas').click({
    position: {
      x: 714,
      y: 411
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 150,
      y: 401
    }
  });
  await page.locator('canvas').dblclick({
    position: {
      x: 460,
      y: 438
    }
  });
  await page.locator('canvas').click({
    button: 'right',
    position: {
      x: 365,
      y: 315
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 439,
      y: 389
    }
  });
});