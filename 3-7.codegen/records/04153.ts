import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://1v1lol.ru/');
  await page.frameLocator('#game iframe').frameLocator('iframe').locator('#gameContainer').click({
    position: {
      x: 643,
      y: 485
    }
  });
});