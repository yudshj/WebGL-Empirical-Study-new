import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://patriceindri-wedding2022.com/');
  await page.locator('#startWebsite').click();
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
});