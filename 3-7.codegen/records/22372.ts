import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.gueulesdelemploi.fr/');
  await page.frameLocator('iframe').getByRole('button', { name: 'Entrer dans l\'exposition' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: '×' }).click();
  await page.frameLocator('iframe').getByText('skip_next').click();
  await page.frameLocator('iframe').getByText('skip_next').click();
  await page.frameLocator('iframe').getByText('skip_next').click();
  await page.frameLocator('iframe').getByText('skip_next').click();
  await page.frameLocator('iframe').getByText('skip_next').click();
  await page.frameLocator('iframe').getByText('skip_next').click();
  await page.frameLocator('iframe').getByText('skip_next').click();
  await page.frameLocator('iframe').getByText('skip_next').click();
});