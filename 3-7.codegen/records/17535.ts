import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://ufomammoot.de/xmas_2019/');
  await page.getByText('START').click();
  await page.getByRole('link', { name: 'Go' }).click();
});