import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://exp-my-little-storybook.lusion.co/');
  await page.getByRole('button', { name: 'Enter' }).click();
});