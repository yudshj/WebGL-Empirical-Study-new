import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.planetalert.be/');
  await page.locator('#canvas').click({
    position: {
      x: 184,
      y: 544
    }
  });
});