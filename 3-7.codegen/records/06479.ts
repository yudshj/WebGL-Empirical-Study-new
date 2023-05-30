import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://cccdi.hk/kung-hei-fat-choi/');
  await page.locator('canvas').click({
    position: {
      x: 658,
      y: 298
    }
  });
});