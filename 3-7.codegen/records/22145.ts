import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://globalexplorers.org.uk/');
  await page.getByText('Continue').click();
  await page.getByText('Skip', { exact: true }).click();
  await page.locator('#cesiumContainer canvas').click({
    position: {
      x: 628,
      y: 259
    }
  });
}); 