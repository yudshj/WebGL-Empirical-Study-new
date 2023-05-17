import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://snuck.lacourdigital.com/');
  await page.getByText('PRESS ANY KEY TO ENTER').click();
  await page.keyboard.press(' ');
});