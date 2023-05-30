import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://assemblr.world/');
  await page.getByText('START').click();
  await page.getByLabel('Give yourself a name !').fill('8888');
  await page.locator('.Introduction_button-next__boq38').click();
  await page.getByRole('img').nth(1).click();
  await page.frameLocator('iframe[title="avatar"]').getByRole('button', { name: 'FINISH' }).click();
  await page.getByText('Sign Up Here').click();
  await page.getByText('Back to log in').click();
  await page.locator('svg').nth(1).click();
});