import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://brickhub.org/i/8');
  await page.getByText('3D', { exact: true }).click();
});