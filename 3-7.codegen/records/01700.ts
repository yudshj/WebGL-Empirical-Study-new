import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://qa.soccerbet.rs/');
  await page.goto('http://qa.soccerbet.rs/#kladjenje');
  await page.locator('input[type="image"]').click();
});