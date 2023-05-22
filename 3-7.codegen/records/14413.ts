import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://play.unity.com/mg/other/03-rmyusc');
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
  await page.frameLocator('#webgl_iframe').locator('a').filter({ hasText: 'Play' }).click();
  await page.frameLocator('#webgl_iframe').locator('[id="\\#canvas"]').click({
    position: {
      x: 443,
      y: 381
    }
  });
});