import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://voiceofracism.co.nz/');
  await page.getByRole('button', { name: 'enter experience' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('#main-render').click({
    position: {
      x: 644,
      y: 510
    },
    delay: 10_000
  });
});