import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://theaiplayground.com/');
  await page.goto('https://theaiplayground.com/blocks/new');
  await page.getByPlaceholder('Type your message or Start Speaking ...').click();
  await page.getByPlaceholder('Type your message or Start Speaking ...').fill('hello');
});