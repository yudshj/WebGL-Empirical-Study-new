import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/art-coloring-book-panda-edition/awFPhi2Oa6Ao2g');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.frameLocator('iframe').locator('div:nth-child(4) > img').click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Change color : #e87669' }).click();
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 451,
      y: 364
    }
  });
  await page.frameLocator('iframe').getByRole('button', { name: 'Change color : #27332f' }).click();
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 630,
      y: 257
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 674,
      y: 282
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 519,
      y: 516
    }
  });
});