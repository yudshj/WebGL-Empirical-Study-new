import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://multiuser-blocks.glitch.me/');
  await page.locator('.bg').first().click();
  await page.locator('.bg').first().click();
  await page.locator('canvas').first().click({
    position: {
      x: 675,
      y: 292
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 675,
      y: 292
    }
  });
  await page.locator('canvas').first().click({
    position: {
      x: 666,
      y: 284
    }
  });
});