import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://holidaymagic.jam3.net/');
  await page.getByRole('button', { name: 'user location icon Use your location' }).click();
  await page.getByRole('button', { name: 'checkmark icon' }).click();
  await page.getByRole('button', { name: 'location marker icon Enter an address' }).click();
  await page.getByRole('button', { name: 'go!' }).click();
});