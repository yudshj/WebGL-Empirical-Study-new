import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://iss-sim.spacex.com/');
  await page.getByText('BEGIN').click();
  await page.getByRole('img', { name: 'Translate Forward' }).locator('path').nth(3).click();
  await page.locator('#roll-left-button > svg > .bg').click();
  await page.locator('#roll-left-button > svg > .bg').click();
  await page.locator('#roll-left-button > svg > .bg').click();
  await page.locator('#roll-left-button > svg > .bg').click();
  await page.locator('#roll-left-button > svg > .bg').click();
  await page.locator('#pitch-up-button > svg > .bg').click();
  await page.getByRole('img', { name: 'Translate Up' }).locator('path').first().click();
});