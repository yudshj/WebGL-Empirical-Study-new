import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.varyavega.com/');
  await page.getByRole('link', { name: 'Click to start' }).click();
  await page.mouse.move(100, 100);
  await page.mouse.move(100, 100);

});