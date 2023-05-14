import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://checkoutcounterconfigurator.metalsistem.com/');
  await page.getByRole('button', { name: 'MODEL DS STATIC - LARGE BASIN' }).click();
  await page.getByRole('button', { name: 'MODEL J PARALLEL' }).click();
  await page.getByRole('button', { name: 'MODEL T TANDEM' }).click();
});