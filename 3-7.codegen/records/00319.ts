import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://bonk.io/');
  await page.frameLocator('#maingameframe').locator('#guestOrAccountContainer_guestButton').click();
  await page.frameLocator('#maingameframe').locator('#guestPlayButton').click();
  await page.frameLocator('#maingameframe').getByText('Quick Play', { exact: true }).click();
});