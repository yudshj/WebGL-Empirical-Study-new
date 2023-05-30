import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://lhommeavenir.cher-ami.tv/');
  await page.getByRole('link', { name: 'Jouez' }).click();
  await page.getByRole('link', { name: 'C\'est parti !' }).click();
  await page.locator('canvas').click({
    position: {
      x: 43,
      y: 167
    }
  });
  await page.locator('canvas').click({
    position: {
      x: 77,
      y: 158
    }
  });
});