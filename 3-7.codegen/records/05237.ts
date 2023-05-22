import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/%E8%89%BA%E6%9C%AF%E6%B6%82%E8%89%B2%E4%B9%A6-%E5%AE%BD%E6%89%8E%E8%8A%82%E7%89%88%E6%9C%AC/MAFhZH7T44UquA');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.frameLocator('iframe').locator('.gallery-asset > img').first().click();
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 526,
      y: 350
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 595,
      y: 356
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 555,
      y: 223
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 504,
      y: 236
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 439,
      y: 223
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 430,
      y: 402
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 349,
      y: 484
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 879,
      y: 332
    }
  });
});