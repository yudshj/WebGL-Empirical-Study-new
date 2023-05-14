import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://citipark.co.uk/citipark/braking-badly/');
  await page.getByText('PLAY THE GAME Over 35.6 million cars were registered for the road in the UK last').click();
  await page.locator('body').press('ArrowDown', {delay: 5000});
  await page.getByText('PLAY', { exact: true }).click();
});