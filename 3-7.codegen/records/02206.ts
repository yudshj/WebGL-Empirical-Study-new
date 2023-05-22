import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://whereisrussia.today/');
  await page.getByRole('button', { name: 'Globe' }).click();
  await page.getByTestId('desktop-menu-item-Globe').click();
});