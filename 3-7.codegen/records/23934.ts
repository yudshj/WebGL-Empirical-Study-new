import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.lionhome.co.jp/');
  await page.locator('#post-958').getByRole('link', { name: 'ショールーム紹介' }).click();
});