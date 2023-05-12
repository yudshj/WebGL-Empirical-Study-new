import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://nlf.geex-arts.com/');
  await page.getByRole('button', { name: '100% Hold' }).click({delay: 2000});
});