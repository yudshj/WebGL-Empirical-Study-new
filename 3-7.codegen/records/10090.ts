import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://holidayspheres.borndigital.be/');
  await page.goto('https://holidayspheres.borndigital.be/page2');
  await page.locator('div').filter({ hasText: /^Next$/ }).nth(2).click();
  await page.locator('div:nth-child(3) > img').first().click();
  await page.locator('div').filter({ hasText: /^Next$/ }).nth(3).click();
  await page.locator('div:nth-child(3) > img').first().click();
  await page.locator('div').filter({ hasText: /^Next$/ }).nth(3).click();
  await page.locator('div:nth-child(2) > .Steps_particle_wrapper__Cx_6E > .Steps_griditem_wrapper__Jc7ML > img').first().click();
  await page.locator('div:nth-child(3) > .Steps_particle_wrapper__Cx_6E > .Steps_griditem_wrapper__Jc7ML > img').click();
  await page.locator('div:nth-child(7) > .Steps_particle_wrapper__Cx_6E > .Steps_griditem_wrapper__Jc7ML > img').click();
  await page.locator('div:nth-child(6) > .Steps_particle_wrapper__Cx_6E > .Steps_griditem_wrapper__Jc7ML > img').click();
  await page.locator('.Button_arrow__aVKXo').click();
});