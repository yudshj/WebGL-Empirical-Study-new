import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.mcatlas.org/');
  await page.goto('https://mcatlas.org/viewer/');
});