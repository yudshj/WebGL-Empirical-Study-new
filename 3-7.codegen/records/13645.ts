import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://oddbot.oddcommon.com/');
  await page.getByRole('button', { name: 'Get Started' }).click();
});