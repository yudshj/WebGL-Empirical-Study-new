import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://2017.14islands.com/');
  await page.locator('#instruction-button').click({delay:10000});

});