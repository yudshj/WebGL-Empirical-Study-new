import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.sterling.it/en/');
  await page.getByText('Enter').click();
  await page.locator('body').press('ArrowDown');
  await page.locator('div:nth-child(2) > .c0133 > .c0135 > .c0137').click();
});