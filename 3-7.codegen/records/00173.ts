import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://apuliapraia-hotel.com/');
  await page.getByRole('link', { name: 'Aceitar todas as cookies' }).click();
  await page.locator('#slideshow-1').getByRole('listitem').filter({ hasText: '2' }).click();
  await page.locator('#slideshow-1').getByRole('listitem').filter({ hasText: '3' }).click();
  await page.locator('#post-preview-1').getByRole('listitem').filter({ hasText: '2' }).click();
  await page.getByRole('listitem').filter({ hasText: '4' }).click();
  await page.getByRole('listitem').filter({ hasText: '6' }).click();
  await page.locator('#post-preview-1').getByRole('link').filter({ hasText: '→' }).click();
  await page.locator('#post-preview-1').getByRole('link').filter({ hasText: '→' }).click();
  await page.locator('#offers_page').getByRole('link').filter({ hasText: '→' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Ampliar' }).click();
});