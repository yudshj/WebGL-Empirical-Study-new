import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://4gats.com/');
  await page.getByRole('button', { name: 'ACCEPTAR' }).click();
  await page.getByRole('link', { name: 'Descobreix-ho' }).click();
});