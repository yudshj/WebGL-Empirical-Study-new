import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://stickpage.com/kingdomheartsparody.shtml');
  await page.locator('div:nth-child(7) > a').click();
  await page.frameLocator('iframe[name="aswift_3"]').frameLocator('iframe[name="ad_iframe"]').getByRole('button', { name: 'Close ad' }).click();
  await page.getByRole('insertion').locator('div').first().click();
  await page.getByRole('link', { name: 'GAMES' }).click();
  await page.locator('#content > div:nth-child(6) > div > div > a').first().click();
  await page.locator('div:nth-child(5) > a').click();
});