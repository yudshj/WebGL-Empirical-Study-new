import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://henryheffernan.com/');
  await page.getByText('START', { exact: true }).click();
  await page.frameLocator('iframe[title="HeffernanOS"]').getByText('Henry HeffernanSoftware EngineerABOUTEXPERIENCEPROJECTSCONTACT').click();
});