import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/where-is-hopper/AAESDxkmmhxSMQ');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Start' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'work Your Bag 1 close Click on your bag to examine things you\'ve found.' }).click();
  await page.frameLocator('iframe').locator('picture:nth-child(2) > img').click();
});