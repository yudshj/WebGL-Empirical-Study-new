import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://logartis.info/');
  await page.getByRole('button', { name: 'Explore', exact: true }).click();
  await page.getByRole('button', { name: 'Explore', exact: true }).press('ArrowDown');
  await page.locator('canvas').click({
    position: {
      x: 643,
      y: 672
    }
  });
  await page.locator('body').press('ArrowDown');
  await page.locator('body').press('ArrowDown');
  await page.locator('canvas').click({
    position: {
      x: 635,
      y: 664
    }
  });
});