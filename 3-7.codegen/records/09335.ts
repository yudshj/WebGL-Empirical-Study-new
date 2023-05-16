import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://geoportal.rhein-sieg-kreis.de/WebOffice_extern_rsk/synserver?project=Geodatenportal_RSK');
});