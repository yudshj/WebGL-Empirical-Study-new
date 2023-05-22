import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://madhattercasino.com/');
  await page.locator('.v-card__text > .v-btn').first().click();
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('mrliangboqiang@sina.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('123456');
  await page.locator('.v-input--selection-controls__ripple').click();
  await page.frameLocator('iframe[name="a-bln8ed5g0tno"]').getByRole('checkbox', { name: 'I\'m not a robot' }).click();
});