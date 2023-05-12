import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://360.jomsborg-vineta.com/');
  await page.getByText('ParkingChata KasowaWCPod Czerwonym Gryfem11Jesteś tutajNawigacjaPoprzednia Panor').click();
  await page.locator('div:nth-child(5) > div:nth-child(3)').click();
  await page.locator('div:nth-child(3) > div:nth-child(3) > div:nth-child(3)').click();
  await page.locator('div:nth-child(3) > div:nth-child(3) > div:nth-child(3)').click();
  await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
  await page.locator('div:nth-child(3) > div:nth-child(3) > div:nth-child(3)').click();
});