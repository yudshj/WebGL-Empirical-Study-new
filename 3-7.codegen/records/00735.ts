import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://falter.wild.plus/#en');
  await page.locator('.target-circle').click();
  await page.locator('.pulsate').click();
  await page.locator('.target-circle').click();
  await page.locator('.target-circle').click();
  await page.locator('.target-circle').click();
  await page.locator('div').filter({ hasText: 'click & drag down the circle to navigate through the experience' }).nth(1).click();
  await page.getByText('tap & drag up to navigate through the experienceclick & drag down the circle to ').click();
  await page.getByText('tap & drag up to navigate through the experienceclick & drag down the circle to ').click();
  await page.getByText('tap & drag up to navigate through the experienceclick & drag down the circle to ').dblclick();
  await page.getByText('1', { exact: true }).click();
  await page.getByText('open scene').click();
  await page.getByText('0 1 2 3 4 5 6 7 8 9').click();
});