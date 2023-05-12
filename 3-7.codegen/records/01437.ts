import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://naturalis.nnm.nl/');
  await page.getByRole('button', { name: 'Aan de slag!' }).click();
  await page.locator('#icon-container').click();
  await page.locator('img:nth-child(15)').click();
});