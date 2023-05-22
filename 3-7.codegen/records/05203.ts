import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/art-coloring-book-%E2%80%94-nasa-edition/IwG-zdFEtW20Hg');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.frameLocator('iframe').locator('div:nth-child(4) > img').click();
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 626,
      y: 449
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 644,
      y: 444
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 681,
      y: 331
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 748,
      y: 329
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 725,
      y: 341
    }
  });
});