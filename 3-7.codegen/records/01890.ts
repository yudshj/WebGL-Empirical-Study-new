import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://snuck.lacourdigital.com/');
  await page.locator('#more_inst img').click();
  await page.getByText('PRESS ANY KEY TO ENTER YOUR SCORE : 10 500 250 0 x0 Click or press P to continue').press('ArrowRight');
});