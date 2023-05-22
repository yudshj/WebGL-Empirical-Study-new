import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://oneworldoneface.com/');
  await page.getByText('here').click();
  await page.getByRole('link', { name: 'Berlin Berlin V' }).click();
  await page.getByRole('heading', { name: 'Berlin' }).click();
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.goto('https://oneworldoneface.com/');
  await page.getByRole('main').getByRole('img').click();
  await page.getByRole('main').getByRole('img').click();
  await page.getByRole('main').getByRole('img').click();
});