import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://en.skywellev.com/et5');
  await page.locator('.stars-wrap > div:nth-child(2)').click();
  await page.locator('.stars-wrap > div:nth-child(3)').click();
  await page.getByRole('img', { name: 'play video' }).nth(1).click();
});