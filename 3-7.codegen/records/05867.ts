import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://blockcraft.online/');
  await page.getByRole('button', { name: 'Cancel' }).click();
  await page.getByText('Play').click();
  await page.getByRole('button', { name: 'Ask me later' }).click();
  await page.locator('body').click();
  await page.locator('body').click({
    button: 'right'
  });
  await page.keyboard.press('w');
  await page.keyboard.press('a');
  await page.mouse.move(100,100);
});