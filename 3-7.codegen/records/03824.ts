import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.themirrorvisitor.com/');
  await page.locator('#content-item-home img').click();
  await page.getByRole('link', { name: 'home' }).click();
  await page.locator('#content-item-home img').click();
  await page.getByRole('link', { name: 'Author and Translator' }).click();
});