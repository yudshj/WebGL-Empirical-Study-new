import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://davideperozzi.com/');
  await page.locator('div').filter({ hasText: 'Click & Hold' }).nth(3).click({delay: 3000});
  await page.locator('use').nth(1).click({delay: 3000});
;
});