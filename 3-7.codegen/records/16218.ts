import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://spacebugs.io/');
  await page.getByRole('button', { name: 'I Agree' }).click();
});