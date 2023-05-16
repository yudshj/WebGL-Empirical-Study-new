import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://2020.digitaldesigner.cool/');
  await page.getByText('start').click();
  await page.getByText('next').click();
  await page.getByText('next').click();
  await page.getByText('next').click();
  await page.getByText('next').click();
  await page.getByText('next').click();
  await page.getByText('next').click();
  await page.getByText('next').click();
  await page.getByText('next').click();
});