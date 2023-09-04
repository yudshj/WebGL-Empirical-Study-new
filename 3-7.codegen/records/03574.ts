import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.ro.me/tech/');
  await page.locator('a:nth-child(2)').first().click();
  await page.frameLocator('#curtain').getByRole('button', { name: 'Play' }).click();
});