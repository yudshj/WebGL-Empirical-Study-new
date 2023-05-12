import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://www.websystems.pt/');
  await page.locator('#HeroSection div').getByRole('link').click();
});