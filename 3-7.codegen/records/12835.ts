import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://ml4a.github.io/demos/tfjs/regression-pong.html');
  await page.getByRole('button', { name: 'Add Sample' }).click();
  await page.getByRole('button', { name: 'Add Sample' }).click();
  await page.getByRole('button', { name: 'Add Sample' }).click();
  await page.getByRole('button', { name: 'Add Sample' }).click();
  await page.getByRole('button', { name: 'Add Sample' }).click();
  await page.getByRole('button', { name: 'Train' }).click();
  await page.getByRole('button', { name: 'Run' }).click();
  await page.locator('#defaultCanvas0').click({
    position: {
      x: 262,
      y: 292
    }
  });
  await page.press('#defaultCanvas0', ' ');
});