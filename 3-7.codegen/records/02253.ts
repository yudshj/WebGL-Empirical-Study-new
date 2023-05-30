import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.58html.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '立即开始' }).click();
  const page1 = await page1Promise;
  await page1.locator('#instrus i').click();
});