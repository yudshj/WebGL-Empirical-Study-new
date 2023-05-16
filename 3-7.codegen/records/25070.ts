import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.nxpo.or.th/UpcyclingTrashGame/');
  await page.locator('canvas').click({
    position: {
      x: 634,
      y: 534
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 649,
      y: 550
    }
  });
  await page.locator('canvas').click({
    clickCount: 3,
    position: {
      x: 649,
      y: 550
    }
  });
});