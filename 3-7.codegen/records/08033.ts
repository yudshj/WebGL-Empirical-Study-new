import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://eco.com/');
  await page.goto('https://eco.com/narrative');
  await page.locator('[id="n"]').click();
  await page.locator('[id="n"]').click();
});