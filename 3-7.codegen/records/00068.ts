import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://a-way-to-go.com/');
  await page.getByText('Shall we begin?').click();
  await page.locator('canvas').click({
    position: {
      x: 595,
      y: 348
    }
  });
});