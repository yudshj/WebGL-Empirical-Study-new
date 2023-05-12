import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://crystallizedskins.com/');
  await page.getByRole('button', { name: 'Launch Digital Pavillion' }).click();
});