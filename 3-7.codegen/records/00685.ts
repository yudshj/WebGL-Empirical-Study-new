import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://ershovo.su/specials/');
  await page.locator('#jivo_close_button jdiv').click();
  await page.getByRole('link', { name: 'Закрыть ×' }).click();
});