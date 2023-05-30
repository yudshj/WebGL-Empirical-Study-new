import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://vredestein-newhorizons.com/');
  await page.locator('#username').click();
  await page.locator('#username').fill('abc');
  await page.getByText('Join as a Guest', { exact: true }).click();
});