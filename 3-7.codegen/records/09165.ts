import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://galerie-yechelange.baby/');
  await page.getByRole('link', { name: 'enter gallery' }).click();
  await page.locator('canvas').click({
    position: {
      x: 656,
      y: 598
    }
  });
  await page.locator('.Tutorial-desktop').click();
  await page.keyboard.press('w', {delay: 1000});
  await page.keyboard.press('Space');
});