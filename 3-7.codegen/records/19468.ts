import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.bbmp.gov.in/');
  await page.goto('https://www.bbmp.gov.in/home');
  await page.locator('span:nth-child(14)').click();
});