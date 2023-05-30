import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('http://vatika.ae/Home/index.html');
  await page.locator('div:nth-child(3) > div:nth-child(13) > div').first().click();
  await page.locator('.ggskin > div').first().click();
  await page.locator('div:nth-child(3) > div:nth-child(3) > div').first().click();
  await page.locator('div:nth-child(20) > div:nth-child(3)').first().click();
  await page.locator('div:nth-child(45) > div:nth-child(3)').click();
  await page.getByText('HomeHomeHair EnhanceHair EnhanceHenna ShelfHenna ShelfHair CareHair CareBlending').click();
  await page.locator('div:nth-child(53) > div').first().click();
  await page.locator('div:nth-child(15) > div:nth-child(3)').first().click();
  await page.locator('div:nth-child(45) > div:nth-child(3)').click();
  await page.locator('div:nth-child(53) > div:nth-child(2)').click();
  await page.getByText('HomeHomeHair EnhanceHair EnhanceHenna ShelfHenna ShelfHair CareHair CareBlending').click();
});