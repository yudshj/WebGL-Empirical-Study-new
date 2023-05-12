import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://aidn.jp/mikutap/');
  await page.getByRole('link', { name: 'START' }).click();
  await page.locator('canvas').click({
    position: {
      x: 613,
      y: 306
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 864,
      y: 162
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 867,
      y: 422
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 486,
      y: 412
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 891,
      y: 290
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 891,
      y: 290
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 865,
      y: 405
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 341,
      y: 272
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 857,
      y: 346
    }
  });
  await page.locator('canvas').click();
});