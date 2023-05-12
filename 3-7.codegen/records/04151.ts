import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://1v1lolgame.co/');
  await page.frameLocator('iframe[title="Game Frame"]').frameLocator('iframe[name="Game Frame"]').locator('#gameContainer').click({
    position: {
      x: 736,
      y: 483
    }
  });
  await page.frameLocator('iframe[title="Game Frame"]').frameLocator('iframe[name="Game Frame"]').locator('#gameContainer').click({
    position: {
      x: 723,
      y: 484
    }
  });
});