import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://midiano.com/');
  await page.locator('#startButton').click();
  await page.getByRole('button', { name: '' }).click();
  await page.locator('canvas:nth-child(5)').click({
    position: {
      x: 48,
      y: 658
    }
  });
  await page.locator('canvas:nth-child(5)').click({
    position: {
      x: 247,
      y: 654
    }
  });
});