import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://explore.mattered.com/');
  await page.getByRole('button', { name: 'Show me what you can do' }).click();
  await page.locator('#text-box').getByRole('button').click();
});