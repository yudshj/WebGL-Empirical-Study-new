import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://giza.fas.harvard.edu/giza3d/');
  await page.getByRole('button', { name: 'Start Tour' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Explore' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: '3D Model' }).click();
});