import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.rpg-map.fr/editeur.php?load=x');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#modal-load').getByRole('img').first().click();
});