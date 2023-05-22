import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://plumegame.com/');
  await page.getByText('high').click();
  await page.locator('a').filter({ hasText: 'play' }).click();
  await page.getByText('skip').click();
  await page.locator('div').filter({ hasText: 'Game paused KEYBOARD OPTION QWERTY * Gamepad Controls MOVE CAMERA MOVE PAUSE JUM' }).nth(2).click();
  await page.keyboard.press('w', { delay: 5000 });
});