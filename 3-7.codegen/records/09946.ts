import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://helloenjoy.itch.io/lights');
  await page.getByRole('button', { name: 'Run experience' }).click();
  await page.frameLocator('#game_drop').locator('body').click();
  await page.frameLocator('#game_drop').locator('body').click();
  await page.frameLocator('#game_drop').locator('body').click({
    clickCount: 8
  });
});