import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.fps.com/');
  await page.getByRole('img', { name: 'arrow' }).nth(1).click();
  await page.getByRole('img', { name: 'arrow' }).nth(1).click();
});