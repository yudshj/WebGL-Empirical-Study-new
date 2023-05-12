import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://letsplay.ouigo.com/');
  await page.getByRole('button', { name: 'Go' }).click();
});