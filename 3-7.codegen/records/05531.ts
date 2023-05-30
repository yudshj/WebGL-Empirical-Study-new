import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://bahaasamir.me/throwbacks-music/');
  await page.locator('#start i').click();
  await page.keyboard.press('Space', {delay: 2000});
  await page.keyboard.press('Space', {delay: 2000});
  await page.keyboard.press('Space', {delay: 2000});
  await page.keyboard.press('Space', {delay: 2000});
  await page.keyboard.press('Space', {delay: 2000});
  await page.keyboard.press('Space', {delay: 2000});
  await page.keyboard.press('Space', {delay: 2000});
  await page.keyboard.press('Space', {delay: 2000});
  await page.keyboard.press('Space', {delay: 2000});
  await page.keyboard.press('Space', {delay: 2000});
});