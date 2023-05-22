import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://gis.esaulet.kz/portal/apps/experiencebuilder/experience/?id=b9f6d12fcdc644f6944a96d5c42b915f&page=page_5');
  await page.frameLocator('iframe').getByRole('button', { name: 'Zoom in' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Zoom out' }).click();
  await page.frameLocator('iframe').locator('#jimu_dijit_CheckBox_4').click();
  await page.frameLocator('iframe').locator('#jimu_dijit_CheckBox_5').click();
  await page.frameLocator('iframe').locator('#jimu_dijit_CheckBox_6').click();
  await page.frameLocator('iframe').locator('#jimu_dijit_CheckBox_7').click();
  await page.frameLocator('iframe').locator('#jimu_dijit_CheckBox_8').click();
  await page.frameLocator('iframe').locator('#jimu_dijit_CheckBox_9').click();
  await page.frameLocator('iframe').locator('#jimu_dijit_CheckBox_10').click();
  await page.frameLocator('iframe').locator('#jimu_dijit_CheckBox_11').click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Zoom in' }).click();
  await page.frameLocator('iframe').getByRole('button', { name: 'Zoom in' }).click();
});