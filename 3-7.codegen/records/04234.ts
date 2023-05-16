import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://3d.amsterdam.nl/');
  await page.goto('https://3d.amsterdam.nl/#1050.63,-961.12,1143.55,56.00,344.51,0.00');
  await page.goto('https://3d.amsterdam.nl/#122050.63,486038.88,1143.55,56.00,344.51,0.00');
});