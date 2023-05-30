import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.jp.square-enix.com/ff15/traingallery/');
  await page.getByRole('button', { name: 'ENTER' }).click();
});