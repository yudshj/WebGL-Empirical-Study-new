import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://sugarhoneycombs.games/');
  await page.frameLocator('iframe[title="Sugar Honeycombs - Squid Game"]').frameLocator('#embed').locator('#unity-canvas').click({
    position: {
      x: 628,
      y: 521
    }
  });
});