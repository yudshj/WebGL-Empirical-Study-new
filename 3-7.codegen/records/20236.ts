import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.chiaraluzzana.com/');
  await page.getByText('to enable the sound').click();
});