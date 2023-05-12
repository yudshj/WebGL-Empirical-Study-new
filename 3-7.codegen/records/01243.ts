import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://m.56089f.com/');
  await page.goto('http://m.56089f.com/index');
});