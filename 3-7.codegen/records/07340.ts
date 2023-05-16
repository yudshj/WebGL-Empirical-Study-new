import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://customizer.hockeymonkey.com/index.php?page=home');
  await page.getByRole('link', { name: 'START DESIGNING' }).click();
});