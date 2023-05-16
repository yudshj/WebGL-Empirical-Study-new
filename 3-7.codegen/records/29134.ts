import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://zerogravity.gg/');
  await page.getByText('next').first().click();
  await page.getByText('next').nth(1).click();
});