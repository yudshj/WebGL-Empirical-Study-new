import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://spot-the-bot.com/');
  await page.getByText('How to play').click();
  await page.getByText('Pick a role').click();
  await page.getByText('Not it!').click();
});