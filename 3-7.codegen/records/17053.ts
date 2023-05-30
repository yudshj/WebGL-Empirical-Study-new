import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://thischairdoesnotexist.com/');
  await page.locator('#weirdness-slider').click();
  await page.locator('#level-slider').click();
  await page.locator('#level-slider').click();
  await page.locator('#resolution-slider').click();
  await page.locator('canvas').click({
    position: {
      x: 609,
      y: 298
    }
  });
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
});