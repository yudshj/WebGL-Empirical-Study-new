import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/in-rhythm-with-nature/1AHie_rumRxQOA');
  await page.locator('iframe').locator('#ctaBlob').click();
  await page.locator('iframe').locator('#breatheBtnBlob').click();

});