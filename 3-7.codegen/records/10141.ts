import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://horizon.celestus.fr/');
  await page.getByRole('link', { name: '- Inscription -' }).click();
  await page.getByPlaceholder('email').click();
  await page.getByPlaceholder('email').fill('mrliangboqiang@sina.com');
  await page.getByPlaceholder('Nom de compte').click();
  await page.getByPlaceholder('Nom de compte').fill('asdfgh');
  await page.locator('#InscrClassique').getByPlaceholder('Mot de passe').click();
  await page.locator('#InscrClassique').getByPlaceholder('Mot de passe').fill('123456');
  await page.getByPlaceholder('Planète mère').click();
  await page.getByPlaceholder('Planète mère').fill('123456');
  await page.getByRole('button', { name: 'Devenir Gouverneur !' }).click();
  await page.frameLocator('frame[name="Interface"]').getByRole('link', { name: 'passer la cinématique (vous pourrez la relire depuis les options)' }).click();
  await page.frameLocator('frame[name="Interface"]').locator('#SurfaceCnvB').click({
    position: {
      x: 1182,
      y: 216
    }
  });
  await page.frameLocator('frame[name="Interface"]').getByRole('link', { name: 'Bâtiments' }).click();
  await page.frameLocator('frame[name="Interface"]').getByRole('link', { name: 'Amiral Jerel Kimo Tuto : Bâtir les fondations' }).click();
  await page.frameLocator('frame[name="Interface"]').locator('#contenuCorps').getByRole('link').first().click();
  await page.frameLocator('frame[name="Interface"]').locator('div').filter({ hasText: /^0 Mine de Métal 0\/20500500 400400 0s$/ }).getByRole('img', { name: 'Batiment' }).click();
  await page.frameLocator('frame[name="Interface"]').locator('#NomObjet').click();
  await page.frameLocator('frame[name="Interface"]').getByRole('img', { name: 'Objet' }).click();
  await page.frameLocator('frame[name="Interface"]').locator('#SurfaceCnvA').click({
    position: {
      x: 210,
      y: 364
    }
  });
  await page.frameLocator('frame[name="Interface"]').locator('#SurfaceCnvA').click({
    position: {
      x: 935,
      y: 188
    }
  });
  await page.frameLocator('frame[name="Interface"]').locator('a:nth-child(8)').click();
  await page.frameLocator('frame[name="Interface"]').locator('.TopNav > a:nth-child(9)').click();
  await page.frameLocator('frame[name="Interface"]').getByText('Mess. 0 Votre nombre de flottes maximal dépend du niveau total de vos spatioport').click();
  await page.frameLocator('frame[name="Interface"]').locator('a:nth-child(7)').click();
});