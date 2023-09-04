import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.proal.rs/portfolio/kompozitni-paneli/');
  await page.locator('.fa-chevron-right').click();
  await page.locator('.fa-chevron-right').click();
  await page.locator('.fa-chevron-right').click();
  await page.locator('.fa-chevron-left').click();
});