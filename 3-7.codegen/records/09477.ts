import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://github.com/jasonmayes/Real-Time-Person-Removal');
  await page.getByRole('link', { name: 'https://codepen.io/jasonmayes/pen/GRJqgma' }).click();
});