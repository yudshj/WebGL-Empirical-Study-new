import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://bohus.vividworks.com/VividWeb');
  await page.getByRole('button', { name: 'Bekrefte' }).click();
});