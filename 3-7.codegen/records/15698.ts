import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://sevens-go-wild.gettagaming.com/');
  await page.getByRole('button', { name: 'OK' }).click();
});