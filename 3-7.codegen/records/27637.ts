import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.thirdstrikecampaign.com/');
  await page.getByRole('link', { name: 'ENTER' }).click();
  await page.getByRole('link', { name: 'SKIP INTRO SKIP INTRO skip intro' }).click();
  await page.mouse.move(100, 100);
  await page.locator('#w-node-c2985e71-3621-d757-52d8-dd2b7f581182-6e786b0f > .gridcolwrapper > .gridcollist > .collection-item > .gridimagelink').click();
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
});