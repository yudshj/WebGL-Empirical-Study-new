import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://alessandrazanghi.studio/');
  await page.locator('div').filter({ hasText: 'click to start' }).nth(2).click();
  await page.locator('div').filter({ hasText: 'chapter two' }).nth(2).click();
  await page.getByRole('heading', { name: 'D i s c o v e r' }).getByText('c').click();
  await page.locator('#app div').filter({ hasText: 'chapter three' }).nth(3).click();
});