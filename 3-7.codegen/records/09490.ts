import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://github.com/yemount/pose-animator/');
  await page.getByRole('link', { name: 'here', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.tensorsite-content__cta').first().click();
  const page1 = await page1Promise;
  await page1.goto('https://holobooth.flutter.dev/#/');
  await page1.goto('https://holobooth.flutter.dev/');
  await page1.goto('https://holobooth.flutter.dev/#/');
  await page1.locator('flt-glass-pane').click();
  await page1.locator('flt-glass-pane').click();
});