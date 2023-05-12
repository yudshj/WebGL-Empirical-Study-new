import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://explore.soane.org/');
  await page.getByText('Sepulchral Chamber').click();
});