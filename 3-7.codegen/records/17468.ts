import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://twistytimer.com/');
  await page.getByRole('combobox').nth(1).selectOption('555wca');
  await page.getByText('SCRA-MBLE').click();
  await page.getByText('SCRA-MBLE').click();
  await page.getByText('ABOUT', { exact: true }).click();
  await page.locator('#stats').getByRole('combobox').selectOption('4');
  await page.getByRole('combobox').first().selectOption('7');
  await page.getByText('last', { exact: true }).click();
  await page.getByText('next', { exact: true }).click();
  await page.getByText('last/next scramble', { exact: true }).click();
  await page.getByText('TOOLS', { exact: true }).click();
  await page.locator('#toolsDiv').getByRole('combobox').selectOption('stats');
  await page.locator('#toolsDiv').getByRole('combobox').selectOption('cfm');
  await page.getByRole('combobox').first().selectOption('3');
});