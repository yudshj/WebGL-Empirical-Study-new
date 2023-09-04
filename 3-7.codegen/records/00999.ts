import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://ideib.caib.es/cataleg/srv/cat/catalog.search;jsessionid=8F60D035BF589D97E7F16FE1277161FB');
  await page.goto('http://ideib.caib.es/cataleg/srv/cat/catalog.search;jsessionid=8F60D035BF589D97E7F16FE1277161FB#/home');
});