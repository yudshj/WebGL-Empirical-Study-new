import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://mug3d.com/');
  await page.locator('.group_color > div:nth-child(2)').first().click();
  await page.locator('#controlSetAngle315').click();
  await page.locator('#controlSetAngle270').click();
  await page.getByText('Animation speed: Animate Reverse').click();
  await page.getByLabel('Animate').check();
  await page.locator('div:nth-child(2) > div:nth-child(5)').click();
  await page.locator('div:nth-child(2) > div:nth-child(3)').first().click();
  await page.getByRole('button', { name: 'Add Image' }).click();
  await page.locator('#file').click();
  await page.locator('#file').setInputFiles('1.jpg');
  await page.getByRole('button', { name: 'Upload Image' }).click();
});