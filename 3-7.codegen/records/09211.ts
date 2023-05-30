import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://gamingchahan.com/deca/');
  await page.getByText('デカルトであそぼ').click();
  await page.getByText('デカルトであそぼ').click();
  await page.getByRole('link', { name: 'トップ' }).click();
});