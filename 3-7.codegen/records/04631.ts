import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://airgreen.pl/sklep/kreator-rozdzielaczy/');
  await page.locator('span:nth-child(3) > .rz-bar').click();
  await page.getByRole('button', { name: '+' }).first().click();
  await page.getByRole('button', { name: '+' }).nth(1).click();
  await page.locator('span:nth-child(3) > .rz-bar').click();
  await page.locator('input[name="\\36 "]').check();
  await page.locator('input[name="\\37 "]').check();
  await page.locator('input[name="\\34 "]').check();
  await page.getByText('198').click();
  await page.getByText('125').click();
});