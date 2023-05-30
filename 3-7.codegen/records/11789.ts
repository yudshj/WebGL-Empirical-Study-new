import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://linkage-designer.nastybaggers.com/');
  await page.locator('#app').getByRole('textbox').click();
  await page.getByRole('combobox').selectOption('IronRider_Regular');
  await page.getByRole('combobox').selectOption('BadManners_Regular');
  await page.getByRole('combobox').selectOption('Abaddon_Regular');
  await page.getByRole('listitem').filter({ hasText: 'Chrome' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Red' }).click();
  await page.getByRole('button', { name: 'YES - Build It' }).click();
});