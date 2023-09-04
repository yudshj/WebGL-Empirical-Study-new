import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://tiendatecno.bpos-iharqui.lenguajevisual.pe/producto/tablet-mr-potato-head-k73-1gb-ram-16gb-kids-naranja/');
});