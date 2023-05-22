import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://team.redcollar.digital/');
  await page.locator('canvas').click({
    position: {
      x: 183,
      y: 273
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 871,
      y: 524
    }
  });
  await page.locator('html').click();
  await page.locator('html').click();
  await page.locator('canvas').click({
    position: {
      x: 316,
      y: 138
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 333,
      y: 710
    }
  });
});