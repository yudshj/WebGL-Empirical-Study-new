import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://cp4ms.csb.app/');
  await page.locator('html').click();
  const page1Promise = page.waitForEvent('popup');
  await page.frameLocator('#sb__open-sandbox16').getByRole('link', { name: 'Open Sandbox' }).click();
  const page1 = await page1Promise;
  await page.locator('html').click();
  await page.locator('html').click();
  await page.locator('canvas').click({
    position: {
      x: 74,
      y: 134
    }
  });
  await page.locator('div').nth(2).click();
  const page2Promise = page.waitForEvent('popup');
  await page.frameLocator('#sb__open-sandbox16').getByRole('link', { name: 'Open Sandbox' }).click();
  const page2 = await page2Promise;
});