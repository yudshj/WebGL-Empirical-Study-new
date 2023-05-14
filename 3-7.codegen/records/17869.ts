import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://vertuality.com.br/tour/q-arena/');
  await page.getByText('360ºTour Virtual').click();
  await page.getByText('Sim').click();
  await page.locator('div:nth-child(6) > div').first().click();
});