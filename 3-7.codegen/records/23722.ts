import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.laprairie.com/en-int/laprairie-skin-caviar-virtual-showroom-retailer?lang=en#/');
  await page.getByRole('button', { name: 'VISIT THE SHOWROOM' }).click();
});