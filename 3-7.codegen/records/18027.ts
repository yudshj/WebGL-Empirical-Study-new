import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://vismedia.agency/merryvismas/');
  await page.getByRole('button', { name: 'Explore' }).click();
  await page.getByRole('tooltip').nth(3).click();
  await page.getByRole('tooltip').nth(3).click();
  await page.locator('div:nth-child(4) > div').first().click();
  await page.getByRole('tooltip').nth(3).click();
  await page.locator('div:nth-child(4) > div').first().click();
  await page.getByText('Play Donate to charity Christmas quiz Please take the Christmas quiz to unlock t').click();
});