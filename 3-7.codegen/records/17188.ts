import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://toro360.es/');
  await page.goto('https://toro360.es/#node423');
  await page.locator('div:nth-child(28) > div > div:nth-child(3)').click();
  await page.goto('https://toro360.es/index.html#node29');
  await page.locator('div:nth-child(63) > div:nth-child(8)').click();
  await page.locator('div:nth-child(63) > div:nth-child(8)').click();
});