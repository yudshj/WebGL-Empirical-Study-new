import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://archiviostoricoexperience.gruppotim.it/en/');
  await page.getByText('Accept').click();
  await page.locator('div').filter({ hasText: /^EXPLORE$/ }).nth(1).click();
  await page.locator('div:nth-child(3) > .hover-area').click();
  await page.locator('div:nth-child(4) > .hover-area').click();
  await page.locator('div:nth-child(5) > .hover-area').click();
  await page.locator('div:nth-child(6) > .hover-area').click();
  await page.locator('div:nth-child(7) > .hover-area').click();
  await page.locator('div:nth-child(8) > .hover-area').click();
  await page.locator('div:nth-child(9) > .hover-area').click();
  await page.locator('div:nth-child(10) > .hover-area').click();
  await page.locator('div:nth-child(11) > .hover-area').click();
});