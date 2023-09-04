import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://chipupdate.at/');
  await page.getByText('Alle akzeptieren').click();
  await page.frameLocator('iframe').locator('div').filter({ hasText: /^Herzlich Willkommen$/ }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Accept cookies' }).click();
  await page.frameLocator('iframe').locator('i:nth-child(3)').click();
});