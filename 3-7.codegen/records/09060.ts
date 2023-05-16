import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://fromhome.hellfest.fr/');
  await page.getByText('I\'m Ready').click();
  await page.getByText('LET’S GO BABY').click();
});