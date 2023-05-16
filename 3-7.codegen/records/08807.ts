import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://fincult.info/games/tayna-poteryannoy-kopilki/');
  await page.locator('canvas').click({
    position: {
      x: 619,
      y: 564
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 779,
      y: 624
    }
  });
});