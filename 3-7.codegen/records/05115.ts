import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://arch.chuhai.edu.hk/');
  await page.frameLocator('iframe').locator('#showcasewrapper').click();
  await page.frameLocator('iframe').locator('#showcasewrapper').click();
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.mouse.wheel(0, -100);
  await page.frameLocator('iframe').frameLocator('#showcase').locator('canvas').click({
    position: {
      x: 685,
      y: 289
    }
  });
  await page.frameLocator('iframe').getByText('Mr. CHOI Ka Kei (Supervisor: Dr. Lara JAILLON)').click();
});