import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://www.timo.ru/dushevye-kabiny-i-dushevye-ograzhdeniya');
  await page.getByRole('link', { name: 'inari slaid' }).click();
  await page.getByRole('link', { name: 'armo-h-' }).click();
  await page.locator('li:nth-child(10) > a').first().click();
  await page.getByRole('link', { name: 'altti-', exact: true }).click();
});