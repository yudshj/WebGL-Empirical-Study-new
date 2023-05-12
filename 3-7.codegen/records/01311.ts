import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://maximumtune.org/');
  await page.getByRole('link', { name: 'BATTLE GRADE' }).click();
});