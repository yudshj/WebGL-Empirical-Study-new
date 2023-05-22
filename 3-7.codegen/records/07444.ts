import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://darkobratina.net/en/');
  await page.getByRole('button', { name: 'nadaljuj continue' }).click();
  await page.getByRole('button', { name: 'preskoči Skip intro' }).click();
  await page.getByRole('link', { name: 'akcije actions (57)' }).click();
  await page.getByRole('button', { name: 'Raziskuj vsebino Explore content' }).click();
  await page.getByRole('link', { name: 'Strasti Passions' }).click();
});