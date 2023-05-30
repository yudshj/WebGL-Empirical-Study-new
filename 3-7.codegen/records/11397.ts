import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://krunker.io/');
  await page.getByRole('button', { name: 'I Accept' }).click();
  await page.getByText('Login or Register person').click();
  await page.getByPlaceholder('Enter Username').click();
  await page.getByPlaceholder('Enter Username').click();
  await page.getByPlaceholder('Enter Username').fill('dsfsgwfew');
  await page.getByPlaceholder('Enter Password').click();
  await page.getByPlaceholder('Enter Password').fill('123456');
  await page.getByText('Register', { exact: true }).click();
  await page.getByText('Register', { exact: true }).click();
  await page.goto('https://krunker.io/');
  await page.getByText('Login or Register person').click();
  await page.getByPlaceholder('Enter Username').click();
  await page.getByPlaceholder('Enter Username').fill('scdfDFe');
  await page.getByPlaceholder('Enter Password').click();
  await page.getByPlaceholder('Enter Password').fill('123456');
  await page.getByText('Register', { exact: true }).click();
  await page.getByText('Login', { exact: true }).click();
  await page.getByText('Register', { exact: true }).click();
});