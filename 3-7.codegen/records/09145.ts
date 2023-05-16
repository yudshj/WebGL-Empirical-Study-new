import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://g502.logitech.promo/ru/');
  await page.getByRole('link', { name: 'ПРОЙТИ ТРЕНИРОВКУ' }).click();
});