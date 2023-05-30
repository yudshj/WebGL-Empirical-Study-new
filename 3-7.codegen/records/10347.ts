import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://iamlilbrain.com/');
  await page.getByRole('button', { name: '[enter] [enter] [enter]' }).click();
  await page.mouse.move(100, 100);
});