import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://citipark.co.uk/citipark/braking-badly/');
  await page.getByText('PLAY THE GAME Over 35.6 million cars were registered for the road in the UK last').click();
  
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.getByText('PLAY', { exact: true }).click();
});