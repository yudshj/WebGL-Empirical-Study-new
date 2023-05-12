import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://heraclosgame.com/');
  await page.getByText('High').nth(1).click();
  await page.locator('canvas').click({
    position: {
      x: 639,
      y: 449
    }
  });
  await page.getByRole('button', { name: 'skip video' }).click();
});