import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.wedoo.it/');
  await page.getByRole('button', { name: 'Accetta tutti' }).click();
  await page.getByRole('button', { name: 'WEDOO ITALY' }).click();
  await page.locator('#home-video div').first().click();
  await page.getByRole('link', { name: 'Lavazza SMEG' }).click();
  await page.locator('.arrows').first().click({
    button: 'middle'
  });
  await page.locator('#cutted-carousel-12').getByRole('button', { name: 'Next slide' }).click();
  await page.locator('#cutted-carousel-12').getByRole('button', { name: 'Next slide' }).click();
  await page.locator('#cutted-carousel-12').getByRole('button', { name: 'Next slide' }).click();
  await page.getByRole('img', { name: 'smeg-demo-cover' }).click();
  await page.getByRole('img', { name: 'smeg-demo-cover' }).click();
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.keyboard.press('ArrowDown');
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
  await page.mouse.wheel(0, 100);
});