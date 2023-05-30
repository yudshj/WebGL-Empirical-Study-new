import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.clicktorelease.com/code/cruciform/');
  await page.getByText('High quality').click();
});