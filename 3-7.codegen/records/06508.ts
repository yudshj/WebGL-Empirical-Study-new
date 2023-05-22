import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://cecraft.io/');
  await page.getByText('Start').click();
  await page.getByRole('link', { name: 'Why do you do this work?' }).click();
  await page.getByRole('link', { name: 'More details about him' }).click();
  await page.getByRole('link', { name: 'Why do you do this work?' }).click();
  await page.getByRole('link', { name: 'What does he do? (services)' }).click();
  await page.getByText('Why hire you?More details about him').click();
  await page.getByRole('link', { name: 'More details about him' }).click();
});