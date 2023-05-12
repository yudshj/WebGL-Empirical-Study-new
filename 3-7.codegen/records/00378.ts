import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://carlosgnotario.com/');
  await page.getByText('Skip tutorial').click();
  await page.getByText('Skip tutorial').click();
  await page.locator('div').filter({ hasText: 'Close' }).nth(2).click();
  await page.locator('div').filter({ hasText: 'Close' }).nth(2).click();
  await page.locator('#projectContent').click();
  await page.locator('#projectContent').click();
});