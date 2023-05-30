import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://spark2.xello.world/');
  await page.locator('div').click();
  await page.locator('div').click();
  await page.locator('div').click();
});