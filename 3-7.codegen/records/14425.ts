import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://playgroundx.site/');
  await page.getByRole('link', { name: 'muplus' }).click();
  await page.locator('video').click();
  await page.keyboard.press('ArrowDown', {delay: 1000});
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
});