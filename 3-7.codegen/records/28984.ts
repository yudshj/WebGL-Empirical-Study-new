import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://youngyoung.en.taiwantrade.com/');
  await page.getByRole('link', { name: 'No' }).click();
  await page.frameLocator('#homeRowBlockStage_275285 iframe').getByRole('button', { name: 'Show Room' }).nth(1).click();
  await page.frameLocator('#homeRowBlockStage_275285 iframe').getByRole('button', { name: 'Factory' }).first().click();
});