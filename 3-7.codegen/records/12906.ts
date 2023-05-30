import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://mont-saint-michel-3d.website/');
  await page.getByRole('button', { name: 'accept-cookies' }).click();
  await page.getByRole('button', { name: 'skip-intro' }).click();
  await page.getByRole('button', { name: 'start' }).click();
  await page.getByRole('button', { name: 'enter' }).click();
  await page.locator('canvas').click({
    position: {
      x: 594,
      y: 240
    }
  });
  await page.getByRole('button', { name: 'toggle-label-visiblity' }).click();
  await page.getByRole('button', { name: 'toggle-label-visiblity' }).click();
  await page.locator('canvas').click({
    position: {
      x: 738,
      y: 447
    }
  });
  await page.getByRole('listitem').filter({ hasText: 'Notre-Dame-Sous-Terre' }).getByRole('img').click();
  await page.getByRole('button', { name: 'close' }).click();
});