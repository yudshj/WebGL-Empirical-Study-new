import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://fwa100.jam3.com/');
  await page.getByRole('button', { name: 'Begin' }).click({
    position: {
      x: 106,
      y: 110
    }
  });
});