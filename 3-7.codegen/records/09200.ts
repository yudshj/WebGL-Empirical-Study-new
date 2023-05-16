import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://gameofphonesvr.com/');
  await page.getByRole('button', { name: 'enter the experience enter the experience' }).click();
});