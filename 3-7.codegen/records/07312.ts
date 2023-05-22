import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://cuisineis6.leroymerlin.fr/');
  await page.goto('https://cuisineis6.leroymerlin.fr/#projects/anonymous/design/');
  await page.goto('https://cuisineis6.leroymerlin.fr/#');
  await page.goto('https://cuisineis6.leroymerlin.fr/#projects/anonymous/design/');
  await page.getByRole('button', { name: 'Tout accepter' }).click();
  await page.frameLocator('#store-iframe').getByRole('button', { name: 'Utiliser ma position' }).click();
  await page.frameLocator('#store-iframe').getByPlaceholder('Code postal').click();
  await page.frameLocator('#store-iframe').getByPlaceholder('Code postal').click();
  await page.frameLocator('#store-iframe').getByPlaceholder('Code postal').click();
  await page.frameLocator('#store-iframe').getByPlaceholder('Code postal').fill('100001');
  await page.frameLocator('#store-iframe').getByPlaceholder('Code postal').press('Enter');
  await page.frameLocator('#store-iframe').locator('.store > div > .ka-button').first().click();
  await page.getByRole('button', { name: 'Aidez-moi à créer une cuisine' }).click();
  await page.getByText('Bien reçu !').click();
});