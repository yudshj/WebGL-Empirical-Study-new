import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://oilproductions.ch/');
  await page.getByText('YES').click();
  await page.getByRole('link', { name: 'About' }).click();
  await page.getByText('About').nth(3).click();
  await page.locator('.stickyContent > .ajaxLink').click();
  await page.getByRole('link', { name: 'Love Room' }).click();
  await page.locator('.stickyContent > .ajaxLink').click();
});