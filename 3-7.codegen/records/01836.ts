import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://senpai-agar.online/xsca-lite/');
  await page.getByText('play').click();
  await page.locator('div:nth-child(2)').first().click();
});