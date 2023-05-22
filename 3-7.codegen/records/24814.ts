import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.netflixshadowandbone.com/');
  await page.getByRole('button', { name: 'Click to enter' }).click();
  await page.getByRole('button', { name: 'Accept to enter' }).click();
  await page.locator('.dotted-pagination-1lqT7XP > button:nth-child(3)').click();
  await page.locator('.dotted-pagination-1lqT7XP > button:nth-child(3)').click();
  await page.locator('.dotted-pagination-1lqT7XP > button:nth-child(3)').click();
  await page.locator('.dotted-pagination-1lqT7XP > button:nth-child(3)').click();
  await page.locator('#canvas').first().click({
    position: {
      x: 647,
      y: 330
    }
  });
  await page.getByRole('button').first().click();
  await page.locator('a:nth-child(6)').click();
  await page.locator('.controls-2hlSJJY > button').first().click();
});