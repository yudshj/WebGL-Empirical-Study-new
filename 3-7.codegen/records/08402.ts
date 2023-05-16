import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://estadio-virtual.cydleonesa.com/');
  await page.locator('#renderCanvas').click({
    position: {
      x: 497,
      y: 528
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 973,
      y: 237
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 950,
      y: 259
    }
  });
  await page.locator('#renderCanvas').click({
    position: {
      x: 936,
      y: 291
    }
  });
});