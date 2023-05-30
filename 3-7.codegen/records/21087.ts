import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.easternmarket.com.au/');
  await page.getByRole('link', { name: '[ OK ]' }).click();
  await page.locator('#Intro').getByRole('link').click();
  await page.locator('canvas').click({
    position: {
      x: 507,
      y: 317
    }
  });
  await page.getByRole('link', { name: 'Home' }).click();
  await page.locator('canvas').click({
    position: {
      x: 421,
      y: 428
    }
  });
});