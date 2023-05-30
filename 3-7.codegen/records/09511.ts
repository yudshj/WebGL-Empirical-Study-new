import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://glassoutlet.fencebuilder.com.au/');
  await page.goto('https://glassoutlet.fencebuilder.com.au/build');
  await page.locator('#fence-icon-enclosed').click();
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.getByRole('checkbox', { name: 'Left Raked Panel?' }).check();
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.getByRole('button', { name: 'Load Saved Design' }).click();
  await page.getByRole('button', { name: 'Close' }).first().click();
  await page.getByRole('link', { name: 'Spans & Gates' }).click();
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.getByRole('button', { name: 'NEXT' }).click();
  await page.getByText('Email Plan & Component List').click();
  await page.getByRole('button', { name: 'Close' }).first().click();
  await page.getByRole('img', { name: 'Logo' }).click();
  await page.getByRole('link', { name: 'Fence Shape' }).click();
});