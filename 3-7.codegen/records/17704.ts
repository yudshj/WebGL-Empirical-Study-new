import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://us.casestation.com/product/designer/');
  await page.frameLocator('#spd_iframe').locator('#right').getByText('3d demo').click();
  await page.frameLocator('#spd_iframe').frameLocator('#preview').locator('canvas').nth(1).click({
    position: {
      x: 307,
      y: 156
    }
  });
  await page.frameLocator('#spd_iframe').frameLocator('#preview').locator('canvas').nth(1).press('ArrowDown');
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
});