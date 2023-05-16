import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://www.shapespark.com/');
  await page.goto('https://www.shapespark.com/');
  await page.goto('https://www.shapespark.com/cn');
  await page.getByRole('link', { name: 'Motion Wave' }).click();
  await page.frameLocator('iframe').locator('#tour-button').click();
});