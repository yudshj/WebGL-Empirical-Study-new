import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://freds-golden-path.gettagaming.com/');
  await page.getByRole('button', { name: 'PLAY' }).click();
  await page.locator('canvas').click({
    position: {
      x: 1178,
      y: 374
    }
  });
});