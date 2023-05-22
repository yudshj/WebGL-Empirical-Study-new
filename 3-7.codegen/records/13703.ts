import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://oleeeeeeg.special.ink/');
  await page.locator('canvas').click({
    position: {
      x: 690,
      y: 582
    }
  });
});