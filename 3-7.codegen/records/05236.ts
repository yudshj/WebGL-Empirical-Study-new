import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/%E8%89%BA%E6%9C%AF%E6%B6%82%E8%89%B2%E4%B9%A6-%E5%9C%A3%E8%AF%9E%E8%8A%82%E7%89%88%E6%9C%AC/WwH3F8q4dyAOmg');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.frameLocator('iframe').locator('.gallery-asset > img').first().click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Zoom In' }).click();
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 584,
      y: 97
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 606,
      y: 95
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 610,
      y: 218
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 719,
      y: 282
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 570,
      y: 368
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 728,
      y: 383
    }
  });
});