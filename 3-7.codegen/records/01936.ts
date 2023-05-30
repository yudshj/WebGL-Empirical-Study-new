import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://starwarsgalaxy.co/');
  await page.getByRole('button', { name: 'Explore The Galaxy' }).click();
  await page.locator('#star-canvas').click({
    position: {
      x: 640,
      y: 353
    }
  });
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#button-close').click();
});