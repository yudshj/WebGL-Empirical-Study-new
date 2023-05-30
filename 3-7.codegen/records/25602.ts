import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.playfantasyslots.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.locator('#loginFB_btn').click();
  const page1 = await page1Promise;
  await page.locator('#loginPanel div').first().click();
});