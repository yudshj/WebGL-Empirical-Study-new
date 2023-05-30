import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.bikeblastgame.com/');
  await page.frameLocator('#game iframe').getByRole('button').first().click();
  await page.frameLocator('#game iframe').locator('[id="\\#canvas"]').click({
    position: {
      x: 259,
      y: 307
    }
  });
  await page.frameLocator('#game iframe').locator('[id="\\#canvas"]').click({
    position: {
      x: 269,
      y: 495
    }
  });
  await page.frameLocator('#game iframe').locator('[id="\\#canvas"]').click({
    position: {
      x: 277,
      y: 493
    }
  });
  await page.getByRole('button', { name: 'dismiss cookie message' }).click();
  await page.frameLocator('#game iframe').locator('[id="\\#canvas"]').click({
    position: {
      x: 268,
      y: 491
    }
  });
  await page.frameLocator('#game iframe').locator('[id="\\#canvas"]').click({
    position: {
      x: 408,
      y: 494
    }
  });
  await page.frameLocator('#game iframe').locator('[id="\\#canvas"]').click({
    position: {
      x: 348,
      y: 314
    }
  });
  await page.frameLocator('#game iframe').locator('[id="\\#canvas"]').click({
    position: {
      x: 358,
      y: 227
    }
  });
  await page.frameLocator('#game iframe').locator('[id="\\#canvas"]').click({
    position: {
      x: 262,
      y: 460
    }
  });
});