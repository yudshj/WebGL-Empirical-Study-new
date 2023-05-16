import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://sono.livyatanim.com/');
  await page.getByText('ENTER', { exact: true }).click();
  await page.getByText('DESKTOP / VR').click();
  await page.locator('#skip_instructions_desk').click();
});