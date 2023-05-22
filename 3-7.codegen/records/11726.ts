import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://lewahouse.com/');
  await page.getByText('This website uses audio to enhance your experience Loading Lets go Begin without').click();
  await page.locator('div').filter({ hasText: 'Click & drag to explore Swipe to explore Scroll to zoom in & out Pinch to zoom i' }).first().click();
});