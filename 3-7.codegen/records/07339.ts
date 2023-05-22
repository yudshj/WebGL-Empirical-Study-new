import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true,
  locale: 'en-US'
});

test('test', async ({ page }) => {
  await page.goto('https://customizer.hockeymonkey.com/?page=designer');
  await page.locator('#stage').click({
    position: {
      x: 580,
      y: 328
    }
  });
  await page.locator('#jersey').click();
  await page.locator('div:nth-child(11) > .jersey-btn').click();
  await page.locator('#views').click();
  await page.locator('.back-view').click();
  await page.locator('.front-view').click();
  await page.locator('#views').click();
  await page.locator('.jersey-rotation-nav').click();
  await page.locator('.back-view').click();
});