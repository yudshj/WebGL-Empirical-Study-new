import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://konfigurator.gerstner-trauringe.de/');
  await page.locator('#showUnity').check();
});