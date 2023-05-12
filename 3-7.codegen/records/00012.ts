import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://12vendome.chaumet.com/');
  await page.getByRole('button', { name: 'Accept and continue' }).click();
  await page.getByRole('button', { name: 'Skip intro' }).click();
  await page.getByRole('button', { name: 'Step inside Step inside' }).click();
});