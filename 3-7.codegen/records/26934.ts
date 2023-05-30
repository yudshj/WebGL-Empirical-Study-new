import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.soloansamblis.lt/');
  await page.locator('canvas').click({
    position: {
      x: 475,
      y: 369
    }
  });
  await page.locator('#back').click();
  await page.locator('canvas').click({
    position: {
      x: 913,
      y: 333
    }
  });

});