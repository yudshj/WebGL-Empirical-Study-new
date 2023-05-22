import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/puzzle-party-%E2%80%94-holi-edition/7QEwWqHHAkEA3Q');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.frameLocator('iframe').locator('[id="\\31 "]').click();
  await page.frameLocator('iframe').getByRole('button', { name: 'person Solo' }).click();
  await page.frameLocator('iframe').locator('#canvas').click({
    position: {
      x: 570,
      y: 376
    }
  });
  await page.frameLocator('iframe').getByText('zoom_out').click();
  await page.frameLocator('iframe').getByText('zoom_in').dblclick();
  await page.frameLocator('iframe').getByText('zoom_out').click();
  await page.frameLocator('iframe').getByText('zoom_in').click();
  await page.frameLocator('iframe').getByText('invert_colors').click();
  await page.frameLocator('iframe').getByText('invert_colors').click();
});