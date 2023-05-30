import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://madalinstuntcars3.live/');
  await page.frameLocator('#iframehtml5').locator('[id="\\#canvas"]').click({
    position: {
      x: 646,
      y: 449
    }
  });
  await page.frameLocator('#iframehtml5').locator('[id="\\#canvas"]').click({
    position: {
      x: 1164,
      y: 47
    }
  });
  await page.keyboard.press('w', { delay: 10000 });
});