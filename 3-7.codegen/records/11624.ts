import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://leap-for-mankind.com/');
  await page.getByRole('button', { name: 'Start Experience' }).click();
  await page.getByRole('button', { name: 'Skip Video' }).click();
  await page.getByRole('button', { name: 'Launch Mission' }).click();
  await page.keyboard.press('Space', { delay: 10000 });
  await page.getByRole('button', { name: 'Explore Gallery' }).click();
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
});