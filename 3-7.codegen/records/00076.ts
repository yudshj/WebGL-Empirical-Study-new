import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://abiturient.vfbsac.by/');
  await page.locator('div:nth-child(12) > div > div > div:nth-child(2) > div:nth-child(2)').click();
  await page.locator('.ggskin > div > div > div:nth-child(3) > div:nth-child(2)').first().click();
  await page.locator('.ggskin > div > div > div:nth-child(4) > div:nth-child(2)').first().click();
  await page.locator('.ggskin > div > div > div:nth-child(5) > div:nth-child(2)').first().click();
  await page.locator('.ggskin > div:nth-child(6) > div:nth-child(2)').first().click();
  await page.locator('.ggskin > div > div > div:nth-child(7) > div:nth-child(2)').first().click();
  await page.locator('div:nth-child(8) > div:nth-child(2)').first().click();
  await page.locator('div:nth-child(9) > div:nth-child(2)').first().click();
  await page.locator('div:nth-child(10) > div:nth-child(2)').first().click();
  await page.locator('div:nth-child(11) > div:nth-child(2)').first().click();
});