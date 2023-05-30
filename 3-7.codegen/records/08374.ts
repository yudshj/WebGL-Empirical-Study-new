import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://escapefan.com/north-dakota-2022/');
  await page.frameLocator('#gamewrapper iframe >> nth=1').locator('canvas').click({
    position: {
      x: 472,
      y: 423
    }
  });
  await page.frameLocator('#gamewrapper iframe >> nth=1').locator('canvas').click({
    position: {
      x: 440,
      y: 445
    }
  });
  await page.frameLocator('#gamewrapper iframe >> nth=1').locator('canvas').click({
    position: {
      x: 435,
      y: 438
    }
  });
  await page.frameLocator('#gamewrapper iframe >> nth=1').locator('canvas').click({
    position: {
      x: 497,
      y: 422
    }
  });
  await page.frameLocator('#gamewrapper iframe >> nth=1').locator('canvas').click({
    position: {
      x: 529,
      y: 421
    }
  });
  await page.frameLocator('#gamewrapper iframe >> nth=1').locator('canvas').click({
    position: {
      x: 441,
      y: 423
    }
  });
});