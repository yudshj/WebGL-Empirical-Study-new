import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://ultrasupernew.com/');
  await page.locator('div').filter({ hasText: 'Dive into our city' }).nth(3).click();
  await page.getByRole('link', { name: 'JALAN BESAR' }).click();
  await page.locator('#wglui').click({
    position: {
      x: 815,
      y: 481
    }
  });
  await page.getByText('Back').click();
  await page.getByText('Back').click();
});