import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://patiokitsdirect.com/design-your-kit/');
  await page.goto('https://patiokitsdirect.com/design-your-kit/?design=');
  await page.locator('div:nth-child(2) > .imgBtn').click();
  await page.locator('#pkdIcons').getByRole('img').nth(1).click();
  await page.locator('div:nth-child(2) > .imgBtn').click();
  await page.locator('button:nth-child(8)').click();
  await page.getByRole('button', { name: '2"' }).click();
  await page.locator('div:nth-child(2) > .imgBtn').click();
  await page.locator('div:nth-child(3) > .imgBtn').click();
  await page.locator('.imgBtn').first().click();
  await page.locator('div:nth-child(2) > .imgBtn').click();
});