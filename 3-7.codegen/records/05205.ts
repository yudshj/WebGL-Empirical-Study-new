import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/art-coloring-book/1QGsh6vSfAQBgQ');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.frameLocator('iframe').locator('div:nth-child(7) > img').click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Change color : #c9847f' }).click();
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 570,
      y: 299
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 586,
      y: 326
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 672,
      y: 310
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 749,
      y: 319
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 752,
      y: 366
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 746,
      y: 418
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 743,
      y: 472
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 739,
      y: 531
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 702,
      y: 524
    }
  });
});