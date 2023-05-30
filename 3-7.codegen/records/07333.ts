import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://currents.activetheory.net/');
  await page.locator('#Stage div').filter({ hasText: 'CURRENTSCome on a journey to discover the invisible force hidden beneath the oce' }).nth(2).click();
  await page.locator('div').nth(2).click();
  await page.mouse.move(100, 100);
  await page.mouse.move(200, 200);
  await page.mouse.move(300, 300);
  await page.mouse.move(400, 400);
  await page.mouse.move(-100, -100);
  await page.mouse.move(-200, -200);
  await page.mouse.move(-300, -300);
  await page.mouse.move(-400, -400);
});