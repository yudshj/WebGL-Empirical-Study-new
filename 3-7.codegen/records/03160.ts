import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.leonardo3.net/en/');
  await page.getByRole('link', { name: '˅' }).click();
  await page.getByRole('link', { name: 'Visit the exhibition' }).click();
  await page.locator('.picto').first().click();
});