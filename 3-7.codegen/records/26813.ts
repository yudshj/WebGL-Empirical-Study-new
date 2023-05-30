import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.sitabellan.com/');
  await page.goto('http://www.sitabellan.com/news/soon.php');
  await page.goto('https://www.sitabellan.com/play/index.php');
  await page.locator('.menu-button').click();
  await page.locator('.menu-button').click();
  await page.locator('#sita').click();
  await page.locator('#sita').click();
  await page.locator('.menu-button').click();
  await page.locator('#tour').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('row', { name: 'MAY 6th 2023 FLOWFEST VALENCIA url' }).getByRole('link', { name: 'url' }).click();
  const page1 = await page1Promise;
});