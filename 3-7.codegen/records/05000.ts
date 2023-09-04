import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://app.acciojob.com/');
  await page.goto('https://authentication.acciojob.com/');
  await page.goto('https://authentication.acciojob.com/sign-up/start');
  await page.locator('.MuiMobileStepper-dot').first().click();
  await page.locator('.MuiMobileStepper-dot').first().click();
});