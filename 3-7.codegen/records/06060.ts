import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://boxfight.io/');
  await page.getByRole('button', { name: 'Got It' }).click();
  await page.locator('#gameContainer').click({
    position: {
      x: 789,
      y: 548
    }
  });
});