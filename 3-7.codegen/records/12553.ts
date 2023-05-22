import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://meet.cmling.com.tw/');
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
  await page.frameLocator('#code_block-1803-2 iframe').getByRole('img').first().click();
  await page.frameLocator('#code_block-1803-2 iframe').locator('div:nth-child(4) > div:nth-child(2)').first().click();
  await page.frameLocator('#code_block-1803-2 iframe').getByText('兒童遊戲區').first().click();
  await page.frameLocator('#code_block-1803-2 iframe').locator('div:nth-child(4) > div').first().click();
});