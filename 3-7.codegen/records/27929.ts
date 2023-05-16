import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.ubestgames.com/minecraft-online-game');
  await page.getByRole('button', { name: 'Click To Play Now' }).click();
});