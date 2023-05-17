import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://belgianwhisky.com/en');
  await page.getByRole('link', { name: 'Yes, I am of legal drinking age' }).click();
  await page.locator('body').press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
});