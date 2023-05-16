import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/art-coloring-book-%E2%80%94-diwali-edition/yQHfY6f_M1rx4w');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.frameLocator('iframe').locator('.gallery-asset > img').first().click();
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 682,
      y: 416
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 562,
      y: 249
    }
  });
  await page.frameLocator('iframe').locator('canvas').nth(1).click({
    position: {
      x: 719,
      y: 228
    }
  });
});