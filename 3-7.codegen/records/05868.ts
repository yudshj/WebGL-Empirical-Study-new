import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://blockify-xyz.glitch.me/');
  await page.getByLabel('Top').click();
  await page.locator('canvas').click({
    position: {
      x: 723,
      y: 358
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 662,
      y: 390
    }
  });
  await page.locator('#fileinput').click();
  await page.locator('#fileinput').setInputFiles('1.jpg');
  await page.locator('canvas').click({
    position: {
      x: 695,
      y: 396
    }
  });
});