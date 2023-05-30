import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://visitevirtuelle.balnea.fr/');
  await page.locator('p:nth-child(5) > img').click();
  await page.locator('div:nth-child(13) > div:nth-child(5)').click();
  await page.locator('div:nth-child(13) > div:nth-child(5)').click();
  await page.locator('div:nth-child(13) > div:nth-child(6)').click();
  await page.locator('div:nth-child(13) > div:nth-child(6)').dblclick();
  await page.locator('div:nth-child(13) > div:nth-child(5)').click({
    clickCount: 3
  });
  await page.locator('div:nth-child(6) > div:nth-child(2)').first().click();
  await page.locator('div:nth-child(13) > div:nth-child(5)').click();
  await page.locator('div:nth-child(13) > div:nth-child(5)').click();
  await page.getByText('Bassin OlympienFutur Bassin OlympienLoudenvielleLoudenvielleMayasMayasIncasIncas').click();
  await page.getByText('Bassin OlympienFutur Bassin OlympienLoudenvielleLoudenvielleMayasMayasIncasIncas').click();
  await page.getByText('Bassin OlympienFutur Bassin OlympienLoudenvielleLoudenvielleMayasMayasIncasIncas').click();
  await page.locator('div:nth-child(3) > div:nth-child(3) > div:nth-child(2)').click();
  await page.locator('div:nth-child(9) > div:nth-child(5)').click();
  await page.locator('div:nth-child(9) > div:nth-child(6)').click();
});