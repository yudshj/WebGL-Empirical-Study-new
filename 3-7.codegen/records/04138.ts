import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://1cademy.us/');
  await page.goto('https://1cademy.com/');
  await page.getByRole('button', { name: 'Apply to join', exact: true }).click({
    button: 'right'
  });
  await page.getByRole('button', { name: 'Apply to join', exact: true }).click();
});