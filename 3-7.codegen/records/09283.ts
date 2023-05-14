import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://geo-devrel-io2021-travel.web.app/');
  await page.goto('https://geo-devrel-io2021-travel.web.app/#intro');
  await page.getByRole('button', { name: 'Start Exploring' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
});