import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://shareyour.christmas/');
  await page.getByText('Let It SnowLet It Snow').click();
  await page.getByText('I like itI like it').click();
  await page.locator('#holder').getByText('🌈').click();
  await page.getByText('😬').click();
  await page.locator('#icon path').click();
});