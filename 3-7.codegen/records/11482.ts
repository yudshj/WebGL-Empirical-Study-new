import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://l2d.algwiki.moe/');
  await page.getByRole('combobox').selectOption('maliluosi_3_doa');
});