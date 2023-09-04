import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://meta.trivellato.it/checkin/city/trivellato/step2');
  await page.goto('https://meta.trivellato.it/checkin/city/trivellato/step2?lang=en');
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next slide' }).click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.getByPlaceholder('Username').fill('Sheldon');
  await page.getByRole('link', { name: 'Next' }).click();
  await page.locator('div:nth-child(2) > .tutorial-slider-list > .img-fluid').click();
  await page.getByRole('link', { name: 'Next' }).click();
  await page.locator('#renderCanvas').click({
    position: {
      x: 69,
      y: 543
    }
  });
});