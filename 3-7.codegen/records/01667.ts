import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://prais-catalog.famall-obs.ru/');
  await page.frameLocator('iframe').locator('.rightButton').click();
  await page.frameLocator('iframe').locator('.rightButton').click();
  await page.frameLocator('iframe').locator('.rightButton').click();
  await page.frameLocator('iframe').locator('.leftButton').click();
  await page.frameLocator('iframe').locator('.leftButton').click();
  await page.locator('#aiovg-player-2').getByRole('button', { name: 'Play Video' }).click();
});