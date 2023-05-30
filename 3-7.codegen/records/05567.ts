import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://bangerl3d.stockinger.blog/');
  await page.getByText('Garagen Parks').click();
  await page.locator('#SelectB').selectOption('2.98');
  await page.locator('a').filter({ hasText: /^Wand$/ }).click();
  await page.getByText('Wand RAL 3003 rubinrot').click();
  await page.locator('a').filter({ hasText: /^Tor$/ }).click();
  await page.getByText('Tor RAL 1015 hellelfenbein').click();
  await page.getByText('Tag Nacht').click();
});