import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://sales.net/');
  await page.locator('#hero i').first().click();
  await page.locator('.grcs_bullet_nav > div:nth-child(3)').click();
});