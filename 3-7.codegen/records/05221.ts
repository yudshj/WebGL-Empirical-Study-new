import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/puzzle-party-%E2%80%94-diwali-edition/OgEoaYfgRx7u3g');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.frameLocator('iframe').locator('[id="\\30 "]').click();
  await page.frameLocator('iframe').getByRole('button', { name: 'person Solo' }).click();
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.getByRole('button', { name: 'Quit Game' }).click();
  await page.locator('a').filter({ hasText: 'Exit' }).click();
});