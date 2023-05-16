import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://klibanos.com/');
  await page.frameLocator('internal:text="Your browser doesn\'t support this content."i').locator('#canvas').click({
    position: {
      x: 807,
      y: 488
    }
  });
  await page.frameLocator('internal:text="Your browser doesn\'t support this content."i').locator('#canvas').click({
    position: {
      x: 600,
      y: 477
    }
  });
});