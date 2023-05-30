import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.sdm.to/');
  await page.goto('https://www.sdm.to/#sdm');
  await page.goto('https://www.sdm.to/#offerta');
  await page.goto('https://www.sdm.to/#numeri');
  await page.goto('https://www.sdm.to/#valori');
  await page.goto('https://www.sdm.to/#obiettivi');
  await page.goto('https://www.sdm.to/#garanzie');
  await page.goto('https://www.sdm.to/#prodotti');
  await page.goto('https://www.sdm.to/#clienti');
  await page.goto('https://www.sdm.to/#premi');
  await page.goto('https://www.sdm.to/#contatti');
});