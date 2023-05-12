import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('http://merryxmas.ccbng.com/');
  await page.getByRole('button', { name: 'HIGH-RES for a complete experience' }).click();
  await page.locator('#happy_santa').click();
  await page.getByText('Write your text').click();
  await page.getByText('Write your text').fill('123');
  await page.locator('#buttons-container').click();
  await page.locator('div:nth-child(5) > div:nth-child(2)').click();
  await page.getByText('Write your text').click();
  await page.locator('div:nth-child(5) > div:nth-child(2)').click();
  await page.locator('div:nth-child(5) > div:nth-child(2)').click({
    clickCount: 4
  });
});