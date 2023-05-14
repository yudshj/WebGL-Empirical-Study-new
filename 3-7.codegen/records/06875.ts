import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.cloudcastles.gg/');
  await page.getByRole('button', { name: 'Enter Elisus' }).click();
});