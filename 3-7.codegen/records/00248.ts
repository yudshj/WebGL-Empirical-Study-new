import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://bambooclub.in/');
  await page.locator('.scroll-down__circle-1').click();
});