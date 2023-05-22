import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://sd.algwiki.moe/');
  await page.getByText('Change Background').click();
  await page.locator('[id="dibanap\\.png"]').click();
  await page.getByText('add').click();
  await page.locator('#abercrombie').click();
  await page.getByText('Select').click();
  await page.locator('div').filter({ hasText: 'Change Background' }).nth(1).click();
  await page.locator('div').filter({ hasText: 'Animation' }).nth(2).click();
  await page.getByRole('combobox').selectOption('dance');
  await page.getByRole('combobox').selectOption('touch');
  await page.getByRole('combobox').selectOption('yun');
});