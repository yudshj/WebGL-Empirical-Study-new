import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://tug-of-war.games/');
  await page.frameLocator('iframe[title="Tug-of-War - Squid Game"]').frameLocator('#embed').locator('#unity-canvas').click({
    position: {
      x: 606,
      y: 529
    }
  });
});