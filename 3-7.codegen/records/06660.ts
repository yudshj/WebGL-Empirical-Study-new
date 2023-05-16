import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.chiaraluzzana.com/');
  await page.locator('div').filter({ hasText: 'Click anywhere to enable the soundto start' }).nth(1).click();
});