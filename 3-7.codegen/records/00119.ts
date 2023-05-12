import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://aircraft.myfoxhurricane.com/');
  await page.goto('http://aircraft.myfoxhurricane.com/recon/');
  await page.frameLocator('iframe[name="cesium_recon"]').getByText('+').click();
  await page.frameLocator('iframe[name="cesium_recon"]').getByText('+').click();
  await page.frameLocator('iframe[name="cesium_recon"]').getByText('+').dblclick();
  await page.frameLocator('iframe[name="cesium_recon"]').getByText('+').click();
  await page.frameLocator('iframe[name="cesium_recon"]').getByText('+').click();
});