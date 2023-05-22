import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://bahaasamir.me/noss_new/');
  await page.locator('div').filter({ hasText: 'This website contains music Click anywhere to enable media playback' }).click();
  await page.locator('div').filter({ hasText: '3D Artist' }).nth(3).click();
  await page.mouse.click(640, 480);
  await page.mouse.click(640, 480);
  await page.mouse.click(640, 480);
  await page.mouse.click(640, 480);
  await page.mouse.click(640, 480);
  await page.mouse.click(640, 480);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);

});