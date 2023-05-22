import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.uskudarkultursanat.com/ajanda/katalog.php');
  await page.frameLocator('iframe').getByRole('link', { name: '' }).click();
});