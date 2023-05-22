import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://dev-donut.ru/');
  await page.locator('#rec342700973').getByRole('button').first().click();
  await page.getByRole('button', { name: 'Закрыть диалог' }).click();
  await page.getByPlaceholder('9').click();
  await page.locator('input[name="countNum"]').fill('30');
  await page.locator('input[name="countNum"]').press('Enter');
  await page.locator('input[name="countNum"]').fill('100');
  await page.locator('input[name="countNum"]').press('Enter');
  await page.getByPlaceholder('12').click();
  await page.locator('input[name="isolateNum"]').fill('100');
  await page.getByPlaceholder('140').click();
  await page.locator('input[name="sizeNum"]').fill('500');
  await page.getByPlaceholder('0.0005').click();
  await page.locator('input[name="timeNum"]').fill('1');
});