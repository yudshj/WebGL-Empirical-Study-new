import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://play.1v1battle.com/');
  await page.frameLocator('iframe').getByText('Play now').click();
  await page.goto('https://play.1v1battle.com/');
  await page.frameLocator('iframe').getByText('Play now').click();
});