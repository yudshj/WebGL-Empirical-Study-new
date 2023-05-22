import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://play.unity.com/mg/other/i-m-going-shopping-v2');
  await page.frameLocator('#webgl_iframe').locator('a').filter({ hasText: 'Play' }).click();
  await page.frameLocator('#webgl_iframe').locator('[id="\\#canvas"]').click({
    position: {
      x: 499,
      y: 440
    }
  });
  await page.frameLocator('#webgl_iframe').locator('[id="\\#canvas"]').click({
    position: {
      x: 509,
      y: 370
    }
  });
  await page.frameLocator('#webgl_iframe').locator('[id="\\#canvas"]').click({
    position: {
      x: 868,
      y: 546
    }
  });
  await page.frameLocator('#webgl_iframe').locator('[id="\\#canvas"]').click({
    position: {
      x: 868,
      y: 546
    }
  });
  await page.frameLocator('#webgl_iframe').locator('[id="\\#canvas"]').click({
    position: {
      x: 868,
      y: 546
    }
  });
  await page.frameLocator('#webgl_iframe').locator('[id="\\#canvas"]').click({
    position: {
      x: 868,
      y: 546
    }
  });
  await page.frameLocator('#webgl_iframe').locator('[id="\\#canvas"]').click({
    position: {
      x: 868,
      y: 546
    }
  });
  await page.frameLocator('#webgl_iframe').locator('body').press('ArrowRight');
  await page.frameLocator('#webgl_iframe').locator('body').press('ArrowRight');
  await page.frameLocator('#webgl_iframe').locator('body').press('ArrowRight');
  await page.frameLocator('#webgl_iframe').locator('body').press('ArrowRight');
  await page.frameLocator('#webgl_iframe').locator('body').press('ArrowRight');
  await page.keyboard.press('d', { delay: 1000 });
  await page.keyboard.press('d', { delay: 1000 });
  await page.keyboard.press('d', { delay: 1000 });
  await page.keyboard.press('d', { delay: 1000 });
});