import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/blob-opera/AAHWrq360NcGbw');
  await page.getByRole('button', { name: 'Launch experiment' }).click();
});