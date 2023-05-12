import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://dyo.blksport.com/');
  await page.getByText('start designing').click();
  await page.goto('http://dyo.blksport.com/#/sport');
  await page.getByRole('listitem').filter({ hasText: /^Football$/ }).click();
  await page.getByText('Womens').click();
  await page.locator('.colors > li:nth-child(4) > span').click();
  await page.getByRole('listitem').filter({ hasText: 'Singlet' }).locator('span').first().click();
});