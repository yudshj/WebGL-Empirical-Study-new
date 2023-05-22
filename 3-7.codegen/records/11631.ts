import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://lebronjamesinnovationcenter.nike.com/');
  await page.getByRole('button', { name: 'Skip Intro' }).click();
  await page.locator('canvas').click({
    position: {
      x: 821,
      y: 136
    }
  });
  await page.locator('.css-l2grmx').dragTo(page.locator('.css-1kfmkcf'));
  await page.getByRole('img', { name: 'sun' }).click();
});