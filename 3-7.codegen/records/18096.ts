import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://voiceofracism.co.nz/');
  await page.getByRole('button', { name: 'enter experience' }).click();
  await page.goto('https://voiceofracism.co.nz/');
  await page.getByRole('button', { name: 'enter experience' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Subtitles/captions' }).click();
  await page.locator('#main-render').click({
    position: {
      x: 658,
      y: 356
    }, delay: 1000
  });
  await page.locator('#main-render').click({
    position: {
      x: 643,
      y: 374
    }, delay: 1000
  });
});