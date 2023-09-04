import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://srivenkateswaracrackers.com/');
  await page.locator('.owl-dots > button:nth-child(2)').click();
});