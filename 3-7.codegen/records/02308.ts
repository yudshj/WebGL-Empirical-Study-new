import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://www.ahk-prod.com/charte/');
  await page.getByRole('link', { name: 'Découvrez la charte' }).click();
  await page.locator('.panel__draggable--cursor').first().click();
  await page.locator('li:nth-child(3) > a').first().click();
  await page.locator('section:nth-child(5) > .panel__container > .panel__content--trigger > .panel__draggable > .panel__draggable--cursor').click();
  await page.locator('section:nth-child(5) > .panel__container > .panel__content--trigger > .panel__draggable > .panel__draggable--cursor').click();
  await page.locator('li:nth-child(3) > .active').click();
  await page.locator('li:nth-child(4) > a').click();
  await page.locator('li:nth-child(5) > a').click();
  await page.locator('li:nth-child(6) > a').click();
  await page.mouse.move(50, 50);
});