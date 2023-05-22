import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.gassepouille.com/');
  await page.getByText('Let\'s go !').click();
  await page.getByText('My Timeline').click();
  await page.getByText('My Skills').click();
  await page.getByText('About Me').click();
});