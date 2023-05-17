import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://17squares.com/closets/?source=%5BgetSource%5D');
  await page.locator('#unity-canvas').click({
    position: {
      x: 659,
      y: 513
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 665,
      y: 380
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 447,
      y: 367
    }
  });
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 710,
      y: 619
    }
  });
});