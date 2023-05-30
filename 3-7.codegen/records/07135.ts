import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://cosmize-dev.web.app/');
  await page.goto('https://app.cosmize.io/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 1018,
      y: 565
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 1066,
      y: 675
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 1082,
      y: 634
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 754,
      y: 374
    }
  });
  await page.keyboard.press('w', { delay: 4000 });
});