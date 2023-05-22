import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://stabfish2.io/');
  await page.goto('https://stabfish2.io/#/');
  await page.getByRole('button', { name: 'Continue As Guest' }).click();
  await page.getByRole('button', { name: 'I understand' }).click();
  await page.getByText('PLAY', { exact: true }).click();
  await page.getByRole('button', { name: 'Start Game' }).click();
  await page.getByRole('button', { name: 'Start Now' }).click();
  await page.mouse.move(100, 100);
  await page.mouse.move(-100, -100);
});