import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://particle-love.com/');
  await page.getByText('Medium').click();
  await page.getByText('Go').click();
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 614,
      y: 296
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 288,
      y: 483
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 836,
      y: 491
    }
  });
  await page.frameLocator('iframe').locator('canvas').click({
    position: {
      x: 348,
      y: 234
    }
  });
});