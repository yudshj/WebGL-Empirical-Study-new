import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://gisp1.polkcountyiowa.gov/portal/apps/sites/#/gis-maps/app/49db18638f614d51b693660400daccb2');
  await page.goto('https://gisp1.polkcountyiowa.gov/portal/apps/sites/#/gis-maps/apps/49db18638f614d51b693660400daccb2/explore');
  await page.frameLocator('iframe[title="Auditor Real Estate Map"]').getByRole('button', { name: 'OK', exact: true }).click();
  await page.frameLocator('iframe[title="Auditor Real Estate Map"]').getByRole('button', { name: 'Layer Controls' }).click();
  await page.frameLocator('iframe[title="Auditor Real Estate Map"]').getByRole('row', { name: 'Layer Map Layers' }).getByRole('button', { name: 'Expand' }).click();
  await page.frameLocator('iframe[title="Auditor Real Estate Map"]').locator('#jimu_dijit_CheckBox_9').click();
  await page.frameLocator('iframe[title="Auditor Real Estate Map"]').locator('#jimu_dijit_CheckBox_16').click();
  await page.frameLocator('iframe[title="Auditor Real Estate Map"]').locator('#jimu_dijit_CheckBox_17').click();
  await page.frameLocator('iframe[title="Auditor Real Estate Map"]').getByRole('button', { name: 'Close window' }).click();
  await page.frameLocator('iframe[title="Auditor Real Estate Map"]').getByRole('button', { name: 'Property Search', exact: true }).click();
  await page.frameLocator('iframe[title="Auditor Real Estate Map"]').locator('#map_layers').click();
  await page.frameLocator('iframe[title="Auditor Real Estate Map"]').getByRole('cell', { name: 'Back' }).click();
  await page.frameLocator('iframe[title="Auditor Real Estate Map"]').getByRole('button', { name: 'Property Search', exact: true }).click();
  await page.frameLocator('iframe[title="Auditor Real Estate Map"]').getByRole('cell', { name: 'Parcel Number, Owner Name, or Street Address', exact: true }).click();
  await page.frameLocator('iframe[title="Auditor Real Estate Map"]').getByLabel('Parcel Number, Owner Name, or Street Address GP or DP or any part of owner name or house # and street').click();
  await page.frameLocator('iframe[title="Auditor Real Estate Map"]').getByLabel('Parcel Number, Owner Name, or Street Address GP or DP or any part of owner name or house # and street').fill('21');
  await page.frameLocator('iframe[title="Auditor Real Estate Map"]').getByRole('button', { name: 'Apply' }).click();
});