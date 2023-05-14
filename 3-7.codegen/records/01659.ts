import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://pos.biborg.com/en/');
  await page.locator('.click-zone').first().click();
});