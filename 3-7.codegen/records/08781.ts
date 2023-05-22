import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://fightforukraine.b-cdn.net/');
  await page.keyboard.press('w', {delay: 1000});
  await page.keyboard.press('w', {delay: 1000});
  await page.keyboard.press('w', {delay: 1000});
  await page.mouse.click(640, 480, {clickCount: 10});
});