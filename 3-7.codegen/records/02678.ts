import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.dilladimension.com/');
  await page.getByText('A short film inspired by J Dilla\'s DONUTS TAKE THE RIDE WATCH TRAILER').click();
  await page.getByText('A short film inspired by J Dilla\'s DONUTS TAKE THE RIDE WATCH TRAILER').click();
  await page.getByText('TAKE THE RIDE').click();
});