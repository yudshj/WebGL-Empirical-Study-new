import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://wiseslang.com/');
  await page.locator('#siteNavDesktop div').filter({ hasText: 'START' }).nth(1).click();
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
});