import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://battlegrounds2d.io/');
  await page.getByRole('heading', { name: 'Play' }).click();
});