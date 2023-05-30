import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://spite.github.io/fuck-2020/');
  await page.getByText('high').click();
  await page.getByRole('img').nth(1).click();
});