import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://3dconfigurator.pixlip.com/');
  await page.getByLabel('LängeLength: \n                            4.0 Meter').click();
  await page.getByLabel('LängeLength: \n                            4.0 Meter').click();
  await page.locator('#wall-increment-div').getByRole('img').click();
  await page.locator('#cabin-increment-div path').click();
  await page.locator('#cabin-increment-div path').click();
  await page.locator('#cabin-increment-div').getByRole('img').click();
  await page.locator('#counter-increment-div path').click();
  await page.locator('#counter-increment-div path').click();
  await page.locator('#counter-increment-div').getByRole('img').click();
  await page.locator('label').nth(3).click();
  await page.locator('#wall-decrement-div').getByRole('img').click();
  await page.locator('#wall-increment-div').getByRole('img').click();
  await page.locator('#wall-increment-div').getByRole('img').click();
  await page.locator('label').nth(4).click();
  await page.locator('label').nth(4).click();
});