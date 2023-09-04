import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://extrablattgroupe.com/principale.html');
  await page.locator('.fa-angle-right').click();
  await page.locator('.fa-angle-right').click();
  await page.getByTitle('Zoom in').locator('span').click();
  await page.locator('.fa-angle-right').click();
  await page.locator('.fa-angle-left').click();
});