import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.gimmi.de/my-account/');
  await page.getByText('Alle akzeptieren').click();
});