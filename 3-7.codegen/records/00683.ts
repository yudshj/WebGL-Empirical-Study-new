import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://eprospekt.tt.com/');
  await page.goto('http://eprospekt.tt.com/#page=1');
  await page.locator('#pagesContainer_documentViewer_arrowright').click();
});