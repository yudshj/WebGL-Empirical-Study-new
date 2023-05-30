import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://vrseat.vercel.app/');
  await page.getByRole('button', { name: 'Select your seats in 3D' }).click();
  await page.getByText('Click here to dismiss').click();
  await page.locator('canvas').click({
    position: {
      x: 539,
      y: 468
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 411,
      y: 646
    }
  });
  await page.getByRole('button', { name: 'Add to cart' }).click();
});