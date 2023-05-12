import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://implant2080.com/');
  await page.goto('https://implant2080.com/?ckattempt=1');
});