import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://tour.engineering.asu.edu/');
  await page.getByRole('button', { name: 'Close intro screen' }).click();
  await page.getByRole('link', { name: 'Explore next location' }).nth(1).click();
  await page.locator('canvas').click({
    position: {
      x: 685,
      y: 272
    }
  });
});