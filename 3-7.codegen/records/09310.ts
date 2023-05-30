import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://lidar.geoportail.lu/');
  await page.locator('canvas').nth(1).click({
    position: {
      x: 513,
      y: 333
    }
  });
  await page.locator('#potree_annotation_container').getByText('Diekirch').click();
});