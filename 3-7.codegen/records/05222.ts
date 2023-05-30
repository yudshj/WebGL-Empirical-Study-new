import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/puzzle-party-%E2%80%94-easter-edition/DwELJ9mwdCW5mw');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.frameLocator('iframe').locator('[id="\\30 "]').click();
  await page.frameLocator('iframe').getByRole('button', { name: 'person Solo' }).click();
  await page.frameLocator('iframe').getByText('zoom_in').click();
  await page.frameLocator('iframe').getByText('zoom_out').dblclick();
  await page.frameLocator('iframe').getByText('invert_colors').click();
  await page.frameLocator('iframe').getByText('invert_colors').click();
});