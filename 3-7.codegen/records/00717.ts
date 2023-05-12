import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://experience.mausoleodiaugusto.it/it/');
  await page.goto('http://experience.mausoleodiaugusto.it/it/intro');
  await page.getByRole('link', { name: 'Inizia l\' esperienza' }).click();
  await page.locator('#nav > div:nth-child(2)').click();
  await page.locator('#nav > div:nth-child(3)').click();
  await page.locator('#nav > div:nth-child(4)').click();
  await page.locator('#nav > div:nth-child(5)').click();
  await page.locator('#nav > div:nth-child(6)').click();
  await page.locator('div:nth-child(7)').first().click();
  await page.locator('div:nth-child(8)').click();
  await page.locator('div:nth-child(9)').click();
  await page.locator('div:nth-child(10)').first().click();
  await page.locator('div:nth-child(11)').click();
  await page.locator('div:nth-child(12)').click();
});