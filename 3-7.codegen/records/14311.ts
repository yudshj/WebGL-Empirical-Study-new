import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://pinball.spacejam.com/');
  await page.locator('#canvas_screens').click({
    position: {
      x: 317,
      y: 513
    }
  });
  await page.locator('#canvas_screens').click({
    position: {
      x: 304,
      y: 507
    }
  });
});