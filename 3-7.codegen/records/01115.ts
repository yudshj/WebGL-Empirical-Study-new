import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://kiddisco.asmallgame.com/');
  await page.keyboard.press('x');
});