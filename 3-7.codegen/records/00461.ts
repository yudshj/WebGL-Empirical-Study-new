import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://collage.artbreeder.com/');
  await page.goto('https://www.artbreeder.com/create/collage');
  await page.frameLocator('iframe[title="collage"]').getByRole('button', { name: 'Continue' }).click();
  await page.frameLocator('iframe[title="collage"]').locator('#prompt-container').getByRole('slider').click();
  await page.frameLocator('iframe[title="collage"]').getByRole('button', { name: 'Render the Window into your Prompt.' }).click();
  await page.frameLocator('iframe[title="collage"]').getByRole('button').click();
});