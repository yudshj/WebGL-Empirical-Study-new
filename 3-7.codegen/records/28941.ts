import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://yare.io/');
  await page.locator('#shape_square').click();
  await page.getByText('Start gamedumb-bot').click();
  await page.goto('https://yare.io/d2n/f0ug2c1yl1n228');
});