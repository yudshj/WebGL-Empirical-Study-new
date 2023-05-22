import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://kids.mattel.com/home');
  await page.goto('https://kids.mattel.com/hot-wheels');
  await page.goto('https://kids.mattel.com/home');
  await page.getByRole('button', { name: 'Play' }).first().click();
});