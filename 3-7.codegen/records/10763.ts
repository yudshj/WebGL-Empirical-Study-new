import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.cartoonnetwork.com.tr/oyunlar/ivandoe-macera-baslasin/oyna');
  await page.getByRole('button', { name: 'Kabul Et' }).click();
});