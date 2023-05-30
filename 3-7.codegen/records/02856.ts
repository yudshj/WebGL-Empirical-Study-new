import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://persepolis.getty.edu/');
  await page.locator('.wrapper-1DA33WM > .icon-1RPHevu > svg').click();
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
  await page.getByRole('button', { name: 'Enter' }).click();
  await page.locator('.scroll-content-38n0doD').click();
  await page.locator('.scroll-content-38n0doD').click();
  await page.locator('.scroll-content-38n0doD').click();
});