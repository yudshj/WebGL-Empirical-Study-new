import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://apod-snippets.vercel.app/');
  await page.getByText('Ready! Click or press any key to enter.').click();
  await page.locator('.home__wrapper').click();
  await page.locator('.home__wrapper').click();
  await page.locator('.home__wrapper').click();
  await page.locator('.home__wrapper').click();
});