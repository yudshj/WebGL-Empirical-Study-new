import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://showroom.littleworkshop.fr/');
  await page.getByText('Enter the showroom').click();
  await page.locator('#main_canvas').click({
    position: {
      x: 285,
      y: 328
    }
  });
  await page.locator('#main_canvas').click({
    position: {
      x: 623,
      y: 341
    }
  });
});