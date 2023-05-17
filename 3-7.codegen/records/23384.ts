import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.karmaitaliana.it/flipcat/KARMACAT/index.html');
  await page.getByTitle('Next Page').nth(1).click();
  await page.getByTitle('Next Page').nth(1).click();
  await page.getByTitle('Next Page').nth(1).click();
  await page.getByTitle('Next Page').nth(1).click();
  await page.getByTitle('Next Page').nth(1).click();
  await page.getByTitle('Next Page').nth(1).click();
  await page.getByTitle('Next Page').nth(1).click();
});