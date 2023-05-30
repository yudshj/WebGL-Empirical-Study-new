import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://planner.kaboodle.co.nz/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await page.getByRole('link', { name: ' Quick Quote' }).click();
  await page.getByText('got it!').click();
  await page.getByText('got it!').click();
  await page.getByText('got it!').click();
  await page.getByText('got it!').click();
  await page.getByRole('button', { name: 'build in 3d' }).click();
  await page.locator('#canvas').click({
    position: {
      x: 556,
      y: 240
    }
  });
  await page.locator('#canvas').click({
    position: {
      x: 521,
      y: 288
    }
  });
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
});