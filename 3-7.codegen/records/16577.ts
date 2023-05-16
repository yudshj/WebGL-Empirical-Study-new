import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://supremelaw.nfb.ca/');
  await page.getByRole('button', { name: 'Start' }).click();
});