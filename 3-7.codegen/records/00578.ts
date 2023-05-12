import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://dinohunt2.ivank.net/');
  await page.frameLocator('#game').locator('[id="c"]').click({
    position: {
      x: 1202,
      y: 517
    }
  });
  await page.frameLocator('#game').locator('[id="c"]').click({
    position: {
      x: 1191,
      y: 515
    }
  });
  await page.frameLocator('#game').locator('[id="c"]').click({
    position: {
      x: 1191,
      y: 515
    }
  });
  await page.frameLocator('#game').locator('[id="c"]').click({
    position: {
      x: 643,
      y: 510
    }
  });
});