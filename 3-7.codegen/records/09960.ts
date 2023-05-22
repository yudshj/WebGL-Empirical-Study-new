import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://henk.tech/');
  await page.getByRole('button', { name: 'My PC' }).click();
  await page.getByRole('button', { name: 'My PC' }).click({
    clickCount: 3
  });
  await page.getByTitle('Type: JSON File\nSize: 153 bytes\nDate modified: 2023-05-21 7:39 AM').click();
});