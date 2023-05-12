import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://cyberpwnkrun.pwnkdigital.com/');
  await page.getByText('Play', { exact: true }).click();
});