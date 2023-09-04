import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.tiendacobreloa.cl/');
  await page.goto('https://www.tiendacobreloa.cl/index.php');
});