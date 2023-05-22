import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://slopegame2.co/');
  await page.frameLocator('iframe[title="Game Frame"]').frameLocator('iframe[name="Game Frame"]').locator('#unity-canvas').click({
    position: {
      x: 500,
      y: 296
    }
  });
});