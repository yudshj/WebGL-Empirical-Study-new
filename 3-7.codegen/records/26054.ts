import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.raphaelkoh.me/Pokedex/');
  await page.locator('input[name="img_logo"]').click();
  await page.locator('input[name="img_logo"]').setInputFiles('1.jpg');
  await page.getByRole('button', { name: 'Predict' }).click();
});