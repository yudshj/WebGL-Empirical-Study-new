import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.citizenwatch-global.com/lightistime/index.html');
  await page.locator('#sound-on').click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('#navi-right-in').click();
  await page.locator('#navi-right-in').click();
  await page.locator('#navi-right-in').click();
  await page.locator('#navi-right-in').click();
  await page.locator('#navi-right-in').click();
  await page.locator('#navi-right-in').click();
});