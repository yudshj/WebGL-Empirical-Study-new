import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://phenomenal-longma-d5181a.netlify.app/');
  await page.locator('#unity-canvas').click({
    position: {
      x: 244,
      y: 231
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 182,
      y: 228
    }
  });
  await page.locator('#unity-canvas').click({
    position: {
      x: 292,
      y: 402
    }
  });
});