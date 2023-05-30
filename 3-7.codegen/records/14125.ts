import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://pchen66.github.io/Toon/');
  await page.locator('canvas').click({
    position: {
      x: 690,
      y: 338
    }
  });
  await page.getByRole('listitem').filter({ hasText: /^x$/ }).locator('div').nth(4).click();
});