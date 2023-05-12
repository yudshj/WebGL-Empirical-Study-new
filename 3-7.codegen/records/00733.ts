import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://fagmobler.vividworks.com/VividWeb');
  await page.locator('#library-contents').getByRole('link', { name: 'Tepper' }).click();
  await page.getByRole('link', { name: 'Skalerbar' }).click();
  await page.getByRole('link', { name: 'Rektangel' }).click();
  await page.getByRole('link', { name: 'Sofa' }).click();
  await page.getByRole('link', { name: 'Choice' }).click();
  await page.getByRole('link', { name: 'Choice Air' }).click();
  await page.getByRole('link', { name: 'Lag en ny kombinasjon.' }).click();
  await page.getByRole('link', { name: 'Modul 301 (3 seter)' }).click();
  await page.getByRole('link', { name: 'Modul 251' }).click();
  await page.getByRole('link', { name: 'Modul 503' }).first().click();
  await page.getByRole('link', { name: 'Modul 506' }).nth(1).click();
  await page.getByRole('link', { name: 'Modul 506' }).nth(1).click();
});