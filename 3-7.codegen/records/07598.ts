import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://demo.foundryvtt.com/join');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('123456');
  await page.getByRole('button', { name: ' Join Game Session' }).click();
  await page.getByText('World Description This is a demo world used to showcase the features and functio').click();
});