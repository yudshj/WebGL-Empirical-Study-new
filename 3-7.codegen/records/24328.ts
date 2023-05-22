import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.memoryinstall.xyz/');
  await page.locator('#defaultCanvas0').click({
    position: {
      x: 646,
      y: 360
    }
  });
  await page.goto('https://www.memoryinstall.xyz/gallery.html');
});