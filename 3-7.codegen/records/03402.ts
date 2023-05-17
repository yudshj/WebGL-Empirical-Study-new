import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.oculus.com/medal-of-honor/');
  await page.getByRole('button', { name: 'Charge into history' }).click();
  await page.getByRole('button').first().click();
  await page.getByRole('heading', { name: 'Click on hotspots to explore' }).click();
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
});