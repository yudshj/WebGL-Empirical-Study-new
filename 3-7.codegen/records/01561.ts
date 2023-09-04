import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://pacs.advanceddiagnosticgroup.com/');
  await page.goto('http://pacs.advanceddiagnosticgroup.com/opalweb/mOpal/mOpal.html');
});