import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://uniba.jp/');
  await page.frameLocator('#uni_iframe').locator('#unity-canvas').click({
    position: {
      x: 687,
      y: 314
    }
  });
  await page.frameLocator('#uni_iframe').locator('#unity-canvas').click({
    position: {
      x: 430,
      y: 247
    }
  });
  await page.frameLocator('#uni_iframe').locator('#unity-canvas').click({
    position: {
      x: 907,
      y: 178
    }
  });
  await page.getByRole('link', { name: 'SKIP' }).click();
  await page.getByRole('link', { name: 'と は ？' }).click();
  await page.getByRole('link', { name: 'Join' }).click();
});