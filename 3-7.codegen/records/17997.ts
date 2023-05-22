import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://virtualtour.najah.edu/');
  await page.locator('[id="\\31 5"] div').nth(4).click();
  await page.locator('[id="\\31 5"] div').nth(4).click();
  await page.locator('[id="\\31 5"] div').nth(4).click();
  await page.locator('[id="\\31 4"] div').nth(4).click();
  await page.locator('[id="\\31 4"] div').nth(4).click();
  await page.locator('[id="\\37 "] div').nth(4).click();
  await page.locator('[id="\\39 "] div').nth(4).click();
  await page.locator('[id="\\31 988"] > div:nth-child(2) > div > div').click();
});