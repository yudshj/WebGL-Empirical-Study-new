import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/%E8%89%BA%E6%9C%AF%E6%B6%82%E8%89%B2%E4%B9%A6-%E5%85%89%E6%98%8E%E8%8A%82%E7%89%88%E6%9C%AC/EQGYT2VgD7-9cg');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.frameLocator('iframe').locator('div:nth-child(5) > img').click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Change color : #debf28' }).click();
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 613,
      y: 283
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 642,
      y: 359
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 693,
      y: 338
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 601,
      y: 342
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 573,
      y: 340
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 582,
      y: 290
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 651,
      y: 275
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 690,
      y: 278
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 646,
      y: 183
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 683,
      y: 195
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 734,
      y: 329
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 721,
      y: 333
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 716,
      y: 398
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 710,
      y: 407
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 682,
      y: 401
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 576,
      y: 390
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 521,
      y: 402
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 518,
      y: 334
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 790,
      y: 350
    }
  });
});