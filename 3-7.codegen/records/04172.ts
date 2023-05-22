import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://2021.seoulbiennale.org/');
  await page.goto('https://www.cafe24.com/infra/service-expiration/');
  await page.getByRole('link', { name: '메인으로 가기' }).click();
});