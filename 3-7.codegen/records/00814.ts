import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://galaxystrife.com/');
  await page.getByPlaceholder('Name').click();
  await page.getByPlaceholder('Name').fill('123');
  await page.getByRole('button', { name: 'Play' }).click();
});