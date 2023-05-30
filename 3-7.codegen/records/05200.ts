import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/3d-pottery/nwHg1D0riJ1ltA');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Start' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.frameLocator('iframe').locator('.w-third-l > div:nth-child(2) > button').first().click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Let\'s go' }).click();
  await page.frameLocator('iframe').locator('#arc').click();
  await page.frameLocator('iframe').locator('#arc').click();
  await page.frameLocator('iframe').locator('#arc').click();
  await page.frameLocator('iframe').locator('#arc').click();
  await page.frameLocator('iframe').locator('#arc').click();
  await page.frameLocator('iframe').locator('#arc').click();
  await page.frameLocator('iframe').locator('#arc').click();
  await page.frameLocator('iframe').locator('#arc').click();
  await page.frameLocator('iframe').locator('#arc').click();
  await page.frameLocator('iframe').locator('#arc').click();
  await page.frameLocator('iframe').locator('#arc').click();
  await page.frameLocator('iframe').locator('#arc').click();
  await page.frameLocator('iframe').locator('#arc').click();
});