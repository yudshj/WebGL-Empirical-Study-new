import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://automat.standardabweichung.de/');
  await page.getByText('Launch').click();
});