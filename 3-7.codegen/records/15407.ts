import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://salledebainsis6.leroymerlin.fr/');
  await page.goto('https://salledebainsis6.leroymerlin.fr/#projects/anonymous/design/');
  await page.goto('https://salledebainsis6.leroymerlin.fr/#');
  await page.goto('https://salledebainsis6.leroymerlin.fr/#projects/anonymous/design/');
  await page.getByRole('button', { name: 'Mes projets enregistrés' }).click();
  await page.getByRole('button', { name: '' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Tout savoir sur les cookies et leurs usages' }).click();
  const page1 = await page1Promise;
  await page.getByRole('button', { name: 'Tout accepter' }).click();
  await page.frameLocator('#store-iframe').getByPlaceholder('Code postal').click();
  await page.frameLocator('#store-iframe').getByPlaceholder('Code postal').fill('10001');
  await page.frameLocator('#store-iframe').locator('.store > div').first().click();
  await page.getByRole('button', { name: 'Commencez une nouvelle cuisine à partir de zéro' }).click();
  await page.goto('https://salledebainsis6.leroymerlin.fr/#projects/anonymous/design/Bathroom');
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'J\'aménage' }).click();
  await page.getByRole('button', { name: ' Zoom avant' }).click();
  await page.getByRole('button', { name: ' Zoom avant' }).click();
  await page.getByRole('button', { name: ' Zoom arrière' }).click();
  await page.getByRole('button', { name: ' → Droite' }).click();
  await page.getByRole('button', { name: ' → Droite' }).click();
  await page.getByRole('button', { name: ' → Droite' }).click();
  await page.getByRole('button', { name: ' ↑ Haut' }).click();
  await page.getByRole('button', { name: ' ↑ Haut' }).click();
  await page.getByRole('button', { name: ' Zoom avant' }).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: ' Zoom avant' }).click();
});