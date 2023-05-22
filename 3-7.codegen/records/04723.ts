import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://alg.garron.us/');
  await page.getByPlaceholder('[Setup or scramble goes here.]').click();
  await page.getByPlaceholder('[Setup or scramble goes here.]').fill('M2 U M2 U2 M2 U M2');
  await page.getByPlaceholder('[Algorithm or solution goes here.]').click();
  await page.getByPlaceholder('[Algorithm or solution goes here.]').fill('M2 U M2 U2 M2 U M2');
  await page.locator('#cube4x4x4').check();
  await page.locator('#animtypesolve').check();
  await page.getByRole('button', { name: 'View', exact: true }).click();
  await page.getByRole('button', { name: '▶' }).click();
});