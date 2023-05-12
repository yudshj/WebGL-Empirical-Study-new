import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://10k.global/');
  await page.getByRole('link', { name: '~ releases' }).click();
  await page.getByText('~>').click();
  await page.getByText('~>').click();
  await page.getByText('~>').dblclick();
});