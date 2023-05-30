import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://demo.techsoft3d.com/');
  await page.locator('sanna-arrow-button').filter({ hasText: '' }).locator('#basicButton').click();
  await page.locator('#content-canvas-container div').nth(2).click();
  await page.getByRole('img').filter({ hasText: 'image/svg+xml' }).click();
  await page.locator('#theme2 sanna-check-field div').click();
  await page.locator('#theme1').getByRole('img').click();
  await page.locator('#cameraElement sanna-arrow-button #basicButton').click();
  await page.locator('#look-at span').click();
  await page.locator('#explode sanna-arrow-button #basicButton').click();
  await page.locator('default-accept-icon').getByRole('img').click();
  await page.locator('default-up-icon').getByRole('img').click({
    clickCount: 14
  });
  await page.locator('.icon-section-tools').click();
  await page.locator('.icon-section-tools').click();
});