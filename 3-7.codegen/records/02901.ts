import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.handsomefish.co.kr/');
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.thumb > img').first().click();
  const page1 = await page1Promise;  await page.keyboard.press('ArrowDown');
  await page1.mouse.wheel(0, 100);
  await page1.mouse.wheel(0, 100);
  await page1.mouse.wheel(0, 100);
  await page1.keyboard.press('ArrowDown');
  await page1.mouse.wheel(0, 100);
  await page1.mouse.wheel(0, 100);
  await page1.mouse.wheel(0, 100);
  await page1.keyboard.press('ArrowDown');
  await page1.mouse.wheel(0, 100);
  await page1.mouse.wheel(0, 100);
  await page1.mouse.wheel(0, 100);
  await page1.keyboard.press('ArrowDown');
  await page1.mouse.wheel(0, 100);
  await page1.mouse.wheel(0, 100);
  await page1.mouse.wheel(0, 100);
});1