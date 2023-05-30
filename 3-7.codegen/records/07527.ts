import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://dddance.party/');
  await page.getByPlaceholder('P A S S C O D E').click();
  await page.getByPlaceholder('P A S S C O D E').fill('88888888');
  await page.getByText('E N T E R').first().click();
});