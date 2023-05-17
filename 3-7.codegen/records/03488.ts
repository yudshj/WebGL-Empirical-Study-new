import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.playkeepout.com/');
  await page.locator('.button').first().click();
  await page.getByText('Okay').nth(1).click();
  await page.getByText('Got it!').click();
});