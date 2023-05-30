import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://areyou.okok.services/');
  await page.getByText('best experienced with your device’s sound turned on CLICK ANYWHERE TO BEGIN').click();
  await page.locator('section').getByRole('link').first().click();
  await page.locator('canvas').first().click({
    position: {
      x: 1074,
      y: 357
    }
  });
});