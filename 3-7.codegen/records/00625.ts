import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://dungeon-generator.fantasy-calendar.com/');
  await page.locator('canvas').click({
    position: {
      x: 391,
      y: 88
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 623,
      y: 73
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 793,
      y: 69
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 911,
      y: 328
    }
  });
});