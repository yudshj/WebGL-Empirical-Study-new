import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://happy2019.sretks.com/');
  await page.getByText('NEXT').click();
  await page.getByText('NEXT').click();
});