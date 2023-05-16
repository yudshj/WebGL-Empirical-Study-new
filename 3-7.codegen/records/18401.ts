import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://abramovic-traces-wepresent.wetransfer.com/');
  await page.getByText('Enter Experience').click();
});