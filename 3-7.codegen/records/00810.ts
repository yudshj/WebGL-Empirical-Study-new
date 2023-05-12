import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/maps/about/behind-the-scenes/streetview/treks/petra/');
  await page.getByRole('button', { name: 'Discover Petra' }).click();
  await page.getByRole('button', { name: 'Discover Petra' }).click();
  await page.getByRole('button', { name: 'Discover Petra' }).click();
  await page.getByRole('button', { name: 'Discover Petra' }).click({
    clickCount: 4
  });
  await page.getByRole('button', { name: 'Discover Petra' }).click({
    clickCount: 10
  });
});