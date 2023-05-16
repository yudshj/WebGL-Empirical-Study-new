import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://1v1-lol.io/');
  await page.frameLocator('#game-area').locator('#onetrust-banner-sdk').click();
});