import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://ordheltene.dk/webgl/index.html');
  await page.locator('#unity-canvas').click({
    position: {
      x: 527,
      y: 292
    }
  });
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#unity-canvas').click({
    position: {
      x: 645,
      y: 368
    }
  });
  const page1 = await page1Promise;
  await page.locator('#unity-canvas').click({
    position: {
      x: 578,
      y: 221
    }
  });
  await page.goto('https://ordheltene.dk/webgl/index.html');
  await page.locator('#unity-canvas').click({
    position: {
      x: 427,
      y: 304
    }
  });
});