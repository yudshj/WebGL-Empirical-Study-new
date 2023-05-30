import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://artsandculture.google.com/experiment/geo-artwork/wgEPVBAUiRVlEQ');
  await page.getByRole('button', { name: 'Play game' }).click();
  await page.frameLocator('iframe').getByRole('img', { name: 'Visual Arts' }).click();
  await page.frameLocator('iframe').locator('div').filter({ hasText: /^To navigate, press the arrow keys\.Move this pinto guess!$/ }).first().click();
  await page.frameLocator('iframe').locator('div').filter({ hasText: /^To navigate, press the arrow keys\.$/ }).first().click();
  await page.frameLocator('iframe').locator('div').filter({ hasText: /^To navigate, press the arrow keys\.$/ }).first().click();
  await page.frameLocator('iframe').locator('div').filter({ hasText: /^To navigate, press the arrow keys\.$/ }).first().click();
  await page.frameLocator('iframe').locator('div').filter({ hasText: /^To navigate, press the arrow keys\.$/ }).first().click();
  await page.frameLocator('iframe').locator('div').filter({ hasText: /^To navigate, press the arrow keys\.$/ }).first().click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Guess Guess' }).click();
  await page.frameLocator('iframe').locator('div').filter({ hasText: /^Next round$/ }).getByRole('button', { name: 'Next round' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Guess Guess' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Guess Guess' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Guess Guess' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Guess Guess' }).click();
  await page.frameLocator('iframe').locator('div').filter({ hasText: /^You earned9pointsSee score$/ }).getByRole('button', { name: 'See score' }).click();
  await page.getByRole('button', { name: 'Quit Game' }).click();
});